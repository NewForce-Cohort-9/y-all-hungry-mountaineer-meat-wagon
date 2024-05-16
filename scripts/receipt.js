//Order #
//Order total
//Pickup location
//When to pickup


const receiptData = async () => {
    const orderResponse = await fetch("http://localhost:8088/orders")
    orders = await orderResponse.json()


    
const receiptContainer = document.querySelector("#receiptContainer")



// const render = async () => {
  
const receiptHTML = ""
   
    const orderIndex = orders.length - 1
    for (const order of order) {
        if (i === orderIndex){
            return receiptHTML =+ `
            ${order.location}
            ${order.food}
            ${order.drink}
            ${order.dessert}
            ${order.price}
            `
        }
        receiptContainer.innerHTML = receiptHTML
    }
    

document.addEventListener("newOrderCreated", render)

render()
    }
