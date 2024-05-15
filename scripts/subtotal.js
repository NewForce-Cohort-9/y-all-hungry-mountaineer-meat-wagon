// export const runningSubtotal = async (event) => {
//     const responseFoods = await fetch("http://localhost:8088/foods")
//     const foods = await responseFoods.json()
//     const responseDrinks = await fetch("http://localhost:8088/drinks")
//     const drinks = await responseDrinks.json()
//     const responseDesserts = await fetch("http://localhost:8088/desserts")
//     const desserts = await responseDesserts.json()
//     const responseLocationFoods = await fetch("http://localhost:8088/locationFoods")
//     const locationFoods = await responseLocationFoods.json()
//     const responseLocationDrinks = await fetch("http://localhost:8088/locationDrinks")
//     const locationDrinks = await responseLocationDrinks.json()
//     const responseLocationDesserts = await fetch("http://localhost:8088/locationDesserts")
//     const locationDesserts = await responseLocationDesserts.json()
//     let subtotalHTML = 0

//     if (event.target.id==="food"){
//         locationFoods.map(locationFood => {
//             if(locationFood.location)
//         })
//     }
    
// }