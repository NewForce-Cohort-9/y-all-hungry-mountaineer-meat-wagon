import { foodChoices } from "./foods.js"
import { dessertChoices } from "./DessertOptions.js";

const container = document.querySelector("#container")

const render = async () => {
    const foodHTML = await foodChoices()
    const dessertChoicesHTML = await dessertChoices()
    const composedHTML = `
    <h1>Mountaineer Meat Wagon</h1>

        <section class="choices__food options">
            <h2>Food</h2>
            ${foodHTML}
        </section>
        <section class="choices__dessert options">
            <h2>Dessert</h2>
            ${dessertChoicesHTML}
        </section>`

    container.innerHTML = composedHTML
}

render()
