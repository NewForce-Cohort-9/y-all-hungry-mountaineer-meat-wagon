
import { drinkChoices } from "./drinks.js"
import { foodChoices } from "./foods.js"

const container = document.querySelector("#container")

const render = async () => {
    const foodHTML = await foodChoices()
    const optionsHTML = await drinkChoices();
    const composedHTML = `
    <h1>Mountaineer Meat Wagon</h1>

        <section class="choices__food options">
            <h2>Food</h2>
            ${foodHTML}
        </section>
        <section>
        ${optionsHTML}
        </section>
        `
    container.innerHTML = composedHTML
}

render()
