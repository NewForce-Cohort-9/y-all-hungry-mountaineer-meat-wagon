import { foodChoices } from "./foods.js"

const container = document.querySelector("#container")

const render = async () => {
    const foodHTML = await foodChoices()
    const composedHTML = `
    <h1>Mountaineer Meat Wagon</h1>

        <section class="choices__food options">
            <h2>Food</h2>
            ${foodHTML}
        </section>`

    container.innerHTML = composedHTML
}

render()
