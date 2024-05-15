export const drinkChoices = async (locationId) => {
    const response = await fetch(`http://localhost:8088/locationDrinks?truckId=${locationId}`)
    const locationDrinks = await response.json()
    const allDrinksResponse = await fetch('http://localhost:8088/drinks')
    const allDrinks = await allDrinksResponse.json()

    let drinkHTML = `<select id="drink">
        <option value="0">Drink options</option>`

    locationDrinks.forEach((locationDrink) => {
        const drink = allDrinks.find((d) => d.id === locationDrink.drinkId)
        if (drink) {
            drinkHTML += `<option value="${drink.id}" data-quantity="${locationDrink.quantity}">
                ${drink.name} - $${drink.price} - ${drink.description} (${locationDrink.quantity} available)
            </option>`;
        }
    });

    drinkHTML += `</select>`

    return drinkHTML
};
