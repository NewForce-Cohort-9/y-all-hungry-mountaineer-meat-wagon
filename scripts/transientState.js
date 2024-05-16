export const transientState = {
    foodId: 0,
    drinkId: 0,
    dessertId: 0,
    locationId: 0,
    currentOrder: [],
    foods: [],
    drinks: [],
    desserts: [],
    currentLocation: []
}

// Fetch and store data
const fetchData = async () => {
    const foodResponse = await fetch("http://localhost:8088/foods")
    transientState.foods = await foodResponse.json()
    console.log("Foods fetched:", transientState.foods)

    const drinkResponse = await fetch("http://localhost:8088/drinks")
    transientState.drinks = await drinkResponse.json()
    console.log("Drinks fetched:", transientState.drinks)

    const dessertResponse = await fetch("http://localhost:8088/desserts")
    transientState.desserts = await dessertResponse.json()
    console.log("Desserts fetched:", transientState.desserts)
}

// Initialize data by calling fetchData and waiting for it to complete
const initializeData = async () => {
    await fetchData()
    renderCurrentOrder()
}
initializeData()

// Add the required setter functions to create your order
const setOrderProperty = (property, value) => {
    transientState[property] = value
    console.log(`${property} set to:`, value)
    updateCurrentOrder()
}

export const setDessert = (chosenDessertId) => {
    transientState.dessertId = chosenDessertId
    console.log(transientState)
    updateCurrentOrder()
}

export const setLocation = (chosenLocationId) => {
    transientState.locationId = chosenLocationId
    console.log(transientState)
    updateCurrentOrder()
}

export const saveOrder = async () => {
    const order = {
        foodId: transientState.foodId,
        drinkId: transientState.drinkId,
        dessertId: transientState.dessertId,
        locationId: transientState.locationId,
        currentOrder: transientState.currentOrder
    }

    console.log("Order to be saved:", order)

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    }
    await fetch("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)

    // Recalculate and render the current order with the correct subtotal
    updateCurrentOrder()
}

// Update current order
const updateCurrentOrder = () => {
    const currentOrder = []
    const food = transientState.foods.find(food => food.id === transientState.foodId)
    const drink = transientState.drinks.find(drink => drink.id === transientState.drinkId)
    const dessert = transientState.desserts.find(dessert => dessert.id === transientState.dessertId)

    if (food) currentOrder.push(food)
    if (drink) currentOrder.push(drink)
    if (dessert) currentOrder.push(dessert)

    transientState.currentOrder = currentOrder
    console.log("Updated currentOrder:", transientState.currentOrder)
    renderCurrentOrder()
}

// Render current order
const renderCurrentOrder = () => {
    const orderContainer = document.querySelector("#currentOrder")
    if (!orderContainer) {
        console.error("Order container element not found")
        return
    }

    let orderHTML = "<h2>Current Order</h2>"

    let subtotal = 0
    transientState.currentOrder.forEach(item => {
        orderHTML += `<p><img src="${item.img}" alt="${item.name}" style="width:50px;height:50px;"> ${item.name} - $${item.price.toFixed(2)}</p>`
        subtotal += item.price
    })

    console.log("Calculated subtotal:", subtotal)

    orderHTML += `<p><strong>Subtotal: $${subtotal.toFixed(2)}</strong></p>`
    orderContainer.innerHTML = orderHTML
}

  