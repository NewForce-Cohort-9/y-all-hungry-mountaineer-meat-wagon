import { foodChoices } from "./foods.js"
import { dessertChoices } from "./desserts.js"
import { drinkChoices } from "./drinks.js";

const container = document.querySelector("#container")

const render = async () => {
    const foodHTML = await foodChoices()
    const dessertChoicesHTML = await dessertChoices()
    const drinkHTML = await drinkChoices()
    const composedHTML = `
    <h1>Mountaineer Meat Wagon</h1>

        <section class="choices__food options">
            <h2>Food</h2>
            ${foodHTML}
        </section>
        <section class="choices__dessert options">
            <h2>Dessert</h2>
            ${dessertChoicesHTML}
        </section>
        <section class="choices__drink options">
            <h2>Drinks</h2>
            ${drinkHTML}
        </section>`

    container.innerHTML = composedHTML
}

render()
