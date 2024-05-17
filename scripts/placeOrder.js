import { saveOrder } from "./transientState.js";

const handlePlaceOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveOrder();
    }
};

export const saveSubmission = () => {
    document.addEventListener("click", handlePlaceOrderClick);
    return "<div></div><button id='saveSubmission'>Place Order</button>";
};
