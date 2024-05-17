//Order #
//Order total
//Pickup location
//When to pickup
import { orderList } from "./saveOrders.js"

const receiptContainer = document.querySelector("#receiptContainer")

const render = async () => {
    const orderListHTML = await orderList();

    const composedHTML = 
    `
    <section>
        ${orderListHTML}
    </section>
    `;

    receiptContainer.innerHTML = composedHTML;

};

document.addEventListener("newOrderCreated", render);
document.addEventListener("locationSelected", render);

render();

























// const receiptData = async () => {
//     const orderResponse = await fetch("http://localhost:8088/orders?_expand=drink&_expand=dessert&_expand=food")
//     const orders = await orderResponse.json()


//     let receiptHTML = ""
   
    

//     const ordersWithIndex = orders.map((order, index) => ({ ...order, id: index + 1 }))


//     const orderLength = orders.length
//     for (const order of ordersWithIndex) {
//         if (order.id === orderLength){
//          return receiptHTML += `
//            <section>
//             ${order.food.name}
//             ${order.drink.name}
//             ${order.dessert.name}
//            </section>
//             `
//         }
//        receiptContainer.innerHTML += receiptHTML
//     }
    
//  }
//  document.addEventListener("newOrderCreated", receiptData)

// receiptData()

