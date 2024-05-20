export const orderList = async () => {
    const response = await fetch("http://localhost:8088/orders");
    const orders = await response.json();
    const orderLength = orders.length

    let orderHTML = "";
    for (const order of orders) {
        if(order.id === orderLength){

            let subtotal = 0;
            orderHTML += `<div class="order"><h3>Order ID: ${order.id}</h3>`;
            order.currentOrder.forEach(item => {
                orderHTML += `<p><img src="${item.img}" alt="${item.name}" style="width:50px;height:50px;"> ${item.name} - $${item.price}</p>`;
                subtotal += item.price;
                
            });
            const tax = subtotal * 0.06
            subtotal += tax
            orderHTML += `<p>Tax (6%): ${tax.toFixed(2)}</p>`
            orderHTML += `<p><strong>Total: $${subtotal.toFixed(2)}</strong></p>`;
            orderHTML += `</div><hr>`;
        }
    }
    return orderHTML;
};
