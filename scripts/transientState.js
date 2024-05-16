//add the required properties to the object below for your order
export const transientState = {
    foodId: 0,
    drinkId: 0,
    dessertId: 0,
    locationId: 0,
    currentOrder: [],
    foods: [],
    drinks: [],
    desserts: []
}

// Fetch and store data
const fetchData = async () => {
    const foodResponse = await fetch("http://localhost:8088/foods")
    transientState.foods = await foodResponse.json()

    const drinkResponse = await fetch("http://localhost:8088/drinks")
    transientState.drinks = await drinkResponse.json()

    const dessertResponse = await fetch("http://localhost:8088/desserts")
    transientState.desserts = await dessertResponse.json()
}

// Call fetchData to initialize data
fetchData()

//add the required setter functions to create your order
export const setFood = (chosenFoodId) => {
    transientState.foodId = chosenFoodId
    console.log(transientState)
    updateCurrentOrder()
}

export const setDrink = (chosenDrinkId) => {
    transientState.drinkId = chosenDrinkId
    console.log(transientState)
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
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}
    // Send the transient state to your API

// Update current order
export const updateCurrentOrder = () => {
    const currentOrder = []
    const food = transientState.foods.find(food => food.id === transientState.foodId)
    const drink = transientState.drinks.find(drink => drink.id === transientState.drinkId)
    const dessert = transientState.desserts.find(dessert => dessert.id === transientState.dessertId)

    if (food) currentOrder.push(food)
    if (drink) currentOrder.push(drink)
    if (dessert) currentOrder.push(dessert)

    transientState.currentOrder = currentOrder
    renderCurrentOrder()
}

// Render current order
const renderCurrentOrder = () => {
    const orderContainer = document.querySelector("#currentOrder")
    let orderHTML = "<h2>Current Order</h2>"

    let subtotal = 0
    transientState.currentOrder.forEach(item => {
        orderHTML += `<p><img src="${item.img}" alt="${item.name}" style="width:50px;height:50px;"> ${item.name} - $${item.price}</p>`
        subtotal += item.price
    })

    orderHTML += `<p><strong>Subtotal: $${subtotal.toFixed(2)}</strong></p>`
    orderContainer.innerHTML = orderHTML
}

  