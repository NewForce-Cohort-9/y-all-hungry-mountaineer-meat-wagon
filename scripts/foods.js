import { setFood } from "./transientState.js"

const handleFoodChange = (event) => {
    if (event.target.id === "food") {
        setFood(parseInt(event.target.value))
    }
}

document.addEventListener("change", handleFoodChange)

export const foodChoices = async () => {
    const response = await fetch("http://localhost:8088/foods")
    const foods = await response.json()
    let foodHTML = `<select id="food">
        <option value ="0">Choose your food:</option>`

    const divStringArray = foods.map(
        (food) => {
            return `
            <option value="${food.id}">
            Item:${food.name}
            Price:$${food.price}
            Description:${food.description}
            </option>`
        }
    )

    foodHTML += divStringArray.join("")
    foodHTML += "</select>"

    return foodHTML
}

