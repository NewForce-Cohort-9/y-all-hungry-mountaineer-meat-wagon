import { foodChoices } from "./foods.js"
import { dessertChoices } from "./desserts.js"
import { drinkChoices } from "./drinks.js";
import { locationOptions } from "./locationsList.js";
import { saveSubmission } from "./placeOrder.js";
import { orderList } from "./saveOrders.js";
import { renderCurrentInventory } from "./transientState.js";

const container = document.querySelector("#container")

const render = async () => {
    const locationOptionsHTML = await locationOptions()
    const foodHTML = await foodChoices()
    const dessertChoicesHTML = await dessertChoices()
    const drinkHTML = await drinkChoices()
    const buttonHTML = saveSubmission()
    const orderListHTML = await orderList()
    const inventoryHTML = await renderCurrentInventory()


    const composedHTML = `
    <section>
        ${locationOptionsHTML}
    </section>
    <section class="choices__food options">
        <h2>Food</h2>
        ${inventoryHTML}
        ${foodHTML}
    </section>
    <section class="choices__dessert options">
        <h2>Dessert</h2>
        ${dessertChoicesHTML}
    </section>
    <section class="choices__drink options">
        <h2>Drinks</h2>
        ${drinkHTML}
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

render()
