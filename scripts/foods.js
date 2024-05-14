export const foodChoices = async () => {
    const response = await fetch("http://localhost:8088/foods")
    const foods = await response.json ()

//2
    let foodHTML = `<select id=food>
    <option value ="0">Choose your food:</option>`

//3
    const divStringArray = foods.map(
        (food) => {
            return  `
            <option value="${food.id}">${food.name}</option>
        `
        }
    )

    //3 Link to Main
    foodHTML += divStringArray.join("")
    foodHTML += "</select>"

    return foodHTML
}

