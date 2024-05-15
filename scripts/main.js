import { locationOptions } from "./locationsList.js";
import { foodChoices } from "./foods.js"
import { drinkChoices } from "./drinks.js"

const render = async () => {
    const locationOptionsHTML = await locationOptions()
    const foodHTML = await foodChoices()
    const optionsHTML = await drinkChoices();
    const composedHTML = `
    <section>
    ${locationOptionsHTML}
    </section>
    <section class="choices__food options">
        <h2>Food</h2>
            ${foodHTML}
            
        </section>
        
        <section>
        <h2>Drinks</h2>
        ${optionsHTML}
        </section>`
    container.innerHTML = composedHTML
}

document.addEventListener("updateTransientState", render)
render()

document.addEventListener("updateTransientState", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})