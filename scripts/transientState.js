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
};

// Fetch and store data
export const fetchData = async () => {
    const foodResponse = await fetch("http://localhost:8088/foods");
    transientState.foods = await foodResponse.json();

    const drinkResponse = await fetch("http://localhost:8088/drinks");
    transientState.drinks = await drinkResponse.json();

    const dessertResponse = await fetch("http://localhost:8088/desserts");
    transientState.desserts = await dessertResponse.json();
};

// Call fetchData to initialize data
fetchData();

// Add the required setter functions to create your order
export const setFood = (chosenFoodId) => {
    transientState.foodId = chosenFoodId;
    updateCurrentOrder();
};

export const setDrink = (chosenDrinkId) => {
    transientState.drinkId = chosenDrinkId;
    updateCurrentOrder();
};

export const setDessert = (chosenDessertId) => {
    transientState.dessertId = chosenDessertId;
    updateCurrentOrder();
};

export const setLocation = (chosenLocationId) => {
    transientState.locationId = chosenLocationId;
    renderCurrentInventory('food');
    renderCurrentInventory('drink');
    renderCurrentInventory('dessert');
    updateCurrentOrder();
};

export const saveOrder = async () => {
    const currentOrder = transientState.currentOrder.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        description: item.description
    }));

    const order = {
        foodId: transientState.foodId,
        drinkId: transientState.drinkId,
        dessertId: transientState.dessertId,
        locationId: transientState.locationId,
        currentOrder: currentOrder
    };

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    };
    await fetch("http://localhost:8088/orders", postOptions);
    const customEvent = new CustomEvent("newOrderCreated");
    document.dispatchEvent(customEvent);
};

// Update current order
export const updateCurrentOrder = () => {
    const currentOrder = [];
    const food = transientState.foods.find(food => food.id === transientState.foodId);
    const drink = transientState.drinks.find(drink => drink.id === transientState.drinkId);
    const dessert = transientState.desserts.find(dessert => dessert.id === transientState.dessertId);

    if (food) currentOrder.push(food);
    if (drink) currentOrder.push(drink);
    if (dessert) currentOrder.push(dessert);

    transientState.currentOrder = currentOrder;
    renderCurrentOrder();
};

// Render current order
const renderCurrentOrder = () => {
    const orderContainer = document.querySelector("#currentOrder");
    let orderHTML = "<h2>Current Order</h2>";

    let subtotal = 0;
    transientState.currentOrder.forEach(item => {
        orderHTML += `<p><img src="${item.img}" alt="${item.name}" style="width:50px;height:50px;"> ${item.name} - $${item.price}</p>`;
        subtotal += item.price;
    });

    orderHTML += `<p><strong>Subtotal: $${subtotal.toFixed(2)}</strong></p>`;
    orderContainer.innerHTML = orderHTML;
};

// Render current inventory
export const renderCurrentInventory = async (type) => {
    let url = "";
    let itemType = "";

    switch (type) {
        case 'food':
            url = "http://localhost:8088/locationFoods?_expand=food";
            itemType = 'food';
            break;
        case 'drink':
            url = "http://localhost:8088/locationDrinks?_expand=drink";
            itemType = 'drink';
            break;
        case 'dessert':
            url = "http://localhost:8088/locationDesserts?_expand=dessert";
            itemType = 'dessert';
            break;
        default:
            return;
    }

    const response = await fetch(url);
    const locationItems = await response.json();

    let inventoryHTML = `<select id="${type}">
        <option value="0">Choose your ${type}:</option>`;

    locationItems.forEach((location) => {
        if (parseInt(location.truckId) === transientState.locationId) {
            const item = location[itemType];
            inventoryHTML += `
                <option value="${item.id}">
                ${item.name} - $${item.price} • ${item.description} - ${location.quantity}
                </option>`;
        }
    });
    inventoryHTML += "</select>";

    const container = document.querySelector(`#${type}Inventory`);
    if (container) {
        container.innerHTML = inventoryHTML;
    } else {
        console.error(`Element with id "${type}Inventory" not found.`);
    }
};

// Add event listeners for dropdown changes
document.addEventListener("change", (event) => {
    const { id, value } = event.target;
    if (id === "food") setFood(parseInt(value));
    if (id === "drink") setDrink(parseInt(value));
    if (id === "dessert") setDessert(parseInt(value));
});


