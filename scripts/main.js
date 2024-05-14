import { locationOptions } from "./locationsList.js";
import { foodChoices } from "./foods.js"

const container = document.querySelector("#container")

const render = async () => {
    const locationOptionsHTML = await locationOptions()
    const foodHTML = await foodChoices()

    const compostedHTML =`
    <section>
    ${locationOptionsHTML}
    </section>
    <section class="choices__food options">
        <h2>Food</h2>
            ${foodHTML}
        </section>`

    container.innerHTML = compostedHTML
}
render()
