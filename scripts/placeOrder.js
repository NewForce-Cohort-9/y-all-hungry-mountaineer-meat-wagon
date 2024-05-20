import { saveOrder, transientState } from "./transientState.js";

const foodLocationResponse = await fetch("http://localhost:8088/locationFoods");
const locationFoods = await foodLocationResponse.json();

const drinkLocationResponse = await fetch("http://localhost:8088/locationDrinks");
const locationDrinks = await drinkLocationResponse.json();
    
const dessertLocationResponse = await fetch("http://localhost:8088/locationDesserts");
const locationDesserts = await dessertLocationResponse.json();


const handlePlaceOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        // for (const location of locationFoods) {
        //     if(parseInt(transientState.currentOrder[0].id) === location.foodId && ){
        //       --location.quantity
        //     }
            
        // }
        saveOrder();
    }
};

export const saveSubmission = () => {
    document.addEventListener("click", handlePlaceOrderClick)
    

    return "<div></div><button onclick=window.open('http://localhost:3000/receipt') id='saveSubmission'>Place Order</button>"
}


//need to import into transient state