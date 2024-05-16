// import { foodChoices } from "./foods.js"
// import { dessertChoices } from "./desserts.js"
// import { drinkChoices } from "./drinks.js";
import { locationOptions } from "./locationsList.js";
import { saveSubmission } from "./placeOrder.js";
import { orderList } from "./saveOrders.js";
import { renderCurrentFoodInventory } from "./transientState.js";
import { renderCurrentDrinkInventory } from "./transientState.js";
import { renderCurrentDessertInventory } from "./transientState.js";

const container = document.querySelector("#container")

const render = async () => {
    const locationOptionsHTML = await locationOptions()
    // const foodHTML = await foodChoices()
    // const dessertChoicesHTML = await dessertChoices()
    // const drinkHTML = await drinkChoices()
    const buttonHTML = saveSubmission()
    const orderListHTML = await orderList()
    const inventoryFoodHTML = await renderCurrentFoodInventory()
    const inventoryDrinkHTML = await renderCurrentDrinkInventory()
    const inventoryDessertHTML= await renderCurrentDessertInventory()


    const composedHTML = `
    <section>
        ${locationOptionsHTML}
    </section>
    <section class="choices__food options">
        <h2>Food</h2>
        ${inventoryFoodHTML}
    </section>
    <section class="choices__dessert options">
        <h2>Dessert</h2>
        ${inventoryDessertHTML}
    </section>
    <section class="choices__drink options">
        <h2>Drinks</h2>
        ${inventoryDrinkHTML}
    </section>
    <section id="currentOrder">
        <h2>Current Order</h2>
    </section>
    <section>
        ${buttonHTML}
            ${orderListHTML}
    </section>`

    container.innerHTML = composedHTML
}

document.addEventListener("newOrderCreated", render)
document.addEventListener("locationSelected", render)

render()
