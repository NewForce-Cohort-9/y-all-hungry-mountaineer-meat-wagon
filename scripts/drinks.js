import { setDrink } from "./transientState.js"

const handleDrinkChoice = (event) => {
    if (event.target.id === "drink") {
        setDrink(parseInt(event.target.value))
    }
}

export const drinkChoices = async () => {
    const response = await fetch("http://localhost:8088/drinks")
    const drinks = await response.json()
    document.addEventListener("change", handleDrinkChoice)
    let drinkHTML = `<select id="drink">
        <option value="0">Drink options</option>`

    const divStringArray = drinks.map((drink) => {
        return `<option value="${drink.id}">${drink.name}</option>`
    })

    drinkHTML += divStringArray.join("")
    drinkHTML += "</select>"

    return drinkHTML
}
