export const drinkChoices = async () => {
    const response = await fetch("http://localhost:8088/drinks")
    const drinks = await response.json()

    let drinkHTML = `<select id="drink">
<option value="0">Drink options</option>`

const divStringArray = drinks.map((drink) => {
    return `<option value="${drink.id}">${drink.name}-$${drink.price}-${drink.description}</option>`;
})


    drinkHTML += divStringArray.join("")
    drinkHTML += "</select>"

    return drinkHTML
}

