import { setDessert } from "./transientState.js";

const handleDessertChoice = (e) => {
    if (e.target.id === "dessert")
        setDessert(parseInt(e.target.value))
}

export const dessertChoices = async () => {
    const response = await fetch("http://localhost:8088/desserts")
    const desserts = await response.json()
    document.addEventListener("change", handleDessertChoice)

    let dessertChoicesHTML = `<select id='dessert' class='form-select bg-info text-white'>
        <option value='0'>Choose your Dessert:</option>`

    const divStringArray = await desserts.map(
        (dessert) => {
            return `<option value='${dessert.id}'>${dessert.name}-$${dessert.price} • ${dessert.description}</option>`
        }
    )

    dessertChoicesHTML += divStringArray.join("")
    dessertChoicesHTML += "</select>"

    return dessertChoicesHTML
}
