import { saveOrder } from "./transientState.js"

const handlePlaceOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveOrder()
    }
}
const inventoryResponse = await fetch("http://localhost:8088/locationFoods?_expand=food")
const locationFoods = await inventoryResponse.json()

export const saveSubmission = () => {
    document.addEventListener("click", handlePlaceOrderClick)
    
    locationFoods.forEach((location) => {
        if(parseInt(location.truckId) === transientState.locationId) {
            return location.quantity = location.quantity--
        }
        
    })


    return "<div></div><button id='saveSubmission'>Place Order</button>"
}


//need to import into transient state