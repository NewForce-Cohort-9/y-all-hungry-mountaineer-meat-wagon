import { drinkChoices } from "./drinks.js"
const container = document.querySelector("#container")
const renderDrinkOptions = async () => {
    const optionsHTML = await drinkChoices();
    const compostedHTML =`
    <section>
    ${optionsHTML}
    </section>
    `
    container.innerHTML = compostedHTML
}

renderDrinkOptions()
