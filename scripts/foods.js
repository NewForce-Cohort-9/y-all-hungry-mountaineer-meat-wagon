//4 
import { setFood } from "./transientState.js"

//5
const handleFoodChange = (event) => {
    if (event.target.id === "food") {
        setFood(parseInt(event.target.value
        ))
    }
}

//6
document.addEventListener("change", handleFoodChange)

//1
export const foodChoices = async () => {
    const response = await fetch("http://localhost:8088/foods")
    const foods = await response.json ()
    document.addEventListener("change", handleFoodChange)
//2
    let foodHTML = `<select id="food">
    <option value ="0">Choose your food:</option>`

//3
    const divStringArray = foods.map(
        (food) => {
            return  `
            <option value="${food.id}">
            Item:${food.name}
            Price:$${food.price}
            Description:${food.description}
            </option>
        `
        }
    )
   

    //3 Link to Main
    foodHTML += divStringArray.join("")
    foodHTML += "</select>"

    return foodHTML
}

