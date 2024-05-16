export const orderList = async () => {
    const response = await fetch("http://localhost:8088/orders")
    const orders = await response.json()

    const foodsResponse = await fetch("http://localhost:8088/foods")
    const foods = await foodsResponse.json()

    const drinksResponse = await fetch("http://localhost:8088/drinks")
    const drinks = await drinksResponse.json()

    const dessertsResponse = await fetch("http://localhost:8088/desserts")
    const desserts = await dessertsResponse.json()
    
    const locationsResponse = await fetch("http://localhost:8088/locations")
    const locations = await locationsResponse.json()



    let orderHTML = ""
    for (const order of orders) {
    
        for (const location of locations) {
            if (location.id === order.locationId){
                orderHTML += `<div>${location.name}</div>`
            }
        }
        for (const food of foods) {
            if (food.id === order.foodId){
                orderHTML += `<div>${food.name}</div>`
            }
        }
        for (const drink of drinks) {
            if (drink.id === order.drinkId){
                orderHTML += `<div>${drink.name}</div>`
            }
        }
        for (const dessert of desserts) {
            if (dessert.id === order.dessertId){
                orderHTML += `<div>${dessert.name}</div>`
            }
        }
        
    }
    return orderHTML
}


// orderHTML += `<section>
        // <div>${order.locationId}</div>
        // <div>${order.foodId}</div>
        // <div>${order.drinkId}</div>
        // <div>${order.dessertId}</div>
        // </section>`