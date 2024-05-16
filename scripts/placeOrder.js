import { saveOrder } from "./transientState.js"

const handlePlaceOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveOrder()
    }
}

export const saveSubmission = () => {
    document.addEventListener("click", handlePlaceOrderClick)

    return "<div></div><button onclick=window.open('http://localhost:3000/receipt') id='saveSubmission'>Place Order</button>"
}


//need to import into transient state