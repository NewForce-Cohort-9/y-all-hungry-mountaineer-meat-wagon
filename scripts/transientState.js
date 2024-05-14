//add the required properties to the object below for your order
const transientState = {
    foodId: 0,
    drinkId: 0,
    dessertId: 0,
    locationId: 0
}

//add the required setter functions to create your order
export const setFood = (chosenFoodId) => {
    transientState.foodId = chosenFoodId
    console.log(transientState)
}

export const setDrink = (chosenDrinkId) => {
    transientState.drinkId = chosenDrinkId
    console.log(transientState)
}

export const setDessert = (chosenDessertId) => {
    transientState.dessertId = chosenDessertId
    console.log(transientState)
}

export const setLocation = (chosenLocationId) => {
    transientState.locationId = chosenLocationId
    console.log(transientState)
}

export const saveOrder = async () => {

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)

}
const response = await fetch("http://localhost:8088/orders", postOptions)
  const customEvent = new CustomEvent("newOrder")
  document.dispatchEvent(customEvent)
}

  // Send the transient state to your API
  