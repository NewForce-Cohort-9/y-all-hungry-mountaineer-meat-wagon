import { foodChoices } from "./foods.js"
import { dessertChoices } from "./desserts.js"
import { drinkChoices } from "./drinks.js";
import { locationOptions } from "./locationsList.js";

const container = document.querySelector("#container")

const render = async () => {
    const locationOptionsHTML = await locationOptions()
    const foodHTML = await foodChoices()
    const dessertChoicesHTML = await dessertChoices()
    const drinkHTML = await drinkChoices()
    const composedHTML = `
    <section>
    ${locationOptionsHTML}
    </section>
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

// document.addEventListener("updateTransientState", render)

render()

// document.addEventListener("updateTransientState", event => {
//     console.log("State of data has changed. Regenerating HTML...")
//     render()
// })