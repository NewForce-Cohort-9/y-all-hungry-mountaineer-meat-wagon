export const drinkChoices = async (locationId) => {
    const response = await fetch(`http://localhost:8088/drinks?location=${locationId}`);
    const drinks = await response.json();

    let drinkHTML = `<select id="drink">
<option value="0">Drink options</option>`;

    const optionStrings = drinks.map((drink) => {
        return `<option value="${drink.id}">${drink.name}-$${drink.price}-${drink.description}</option>`;
    });

    drinkHTML += optionStrings.join("");
    drinkHTML += `</select>`;

    return drinkHTML;
};

