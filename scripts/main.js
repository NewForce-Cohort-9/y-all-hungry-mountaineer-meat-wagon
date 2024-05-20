import { locationOptions } from "./locationsList.js";
import { saveSubmission } from "./placeOrder.js";
// import { orderList } from "./saveOrders.js";
import { renderCurrentInventory, fetchData } from "./transientState.js";

const container = document.querySelector("#container");

const render = async () => {
    await fetchData(); // Ensure data is fetched before rendering
    const locationOptionsHTML = await locationOptions();
    const buttonHTML = saveSubmission();
    // const orderListHTML = await orderList();

    const composedHTML = `
    <section class="locOptions">
        ${locationOptionsHTML}
    </section>
    <div class="container text-center">
        <div class="row">
            <div class="col">
    <section class="choices__food options">
        <h2>Food</h2>
        <div id="foodInventory"></div>
    </section>
    </div>
        <div class="col">
    <section class="choices__dessert options">
        <h2>Dessert</h2>
        <div id="dessertInventory"></div>
    </section>
    </div>
        <div class="col">
    <section class="choices__drink options">
        <h2>Drinks</h2>
        <div id="drinkInventory"></div>
    </section>
    </div>
    </div>
    </div>
    <section id="currentOrder">
        <h2>Current Order</h2>
    </section>
    <section>
        ${buttonHTML}
    </section>`;

    container.innerHTML = composedHTML;

    // Call the inventory rendering functions after the base HTML is in place
    await renderCurrentInventory('food');
    await renderCurrentInventory('drink');
    await renderCurrentInventory('dessert');
};

document.addEventListener("newOrderCreated", render);
document.addEventListener("locationSelected", render);

render();
