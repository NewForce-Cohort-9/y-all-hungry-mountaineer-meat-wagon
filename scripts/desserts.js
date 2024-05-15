export const dessertChoices = async () => {
    const response = await fetch("http://localhost:8088/desserts")
    const desserts = await response.json()

    let dessertChoicesHTML = `<select id='dessert'>
        <option value='0'>Choose your Dessert:</option>`

        const divStringArray = desserts.map(
            (dessert) => {
                return `<option value='${dessert.id}'>${dessert.name}</option>`
            }
        )

        dessertChoicesHTML += divStringArray.join("")
        dessertChoicesHTML += "</select>"

        return dessertChoicesHTML

}
