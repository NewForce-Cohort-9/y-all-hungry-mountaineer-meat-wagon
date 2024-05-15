import { setLocation, transientState } from "./transientState.js";

const handleLocationChoice = async (event) => {
    if (event.target.id === "location"){
        const response = await fetch("http://localhost:8088/locations")
        const locations = await response.json()
        locations.map(singleLocation => {
            if(singleLocation.id === parseInt(event.target.value)) {
                document.querySelector("#locationChosen").innerHTML = `<h1>You have chosen: ${singleLocation.name}` 
            }
        })
        setLocation(parseInt(event.target.value))
    }
}
document.addEventListener("change", handleLocationChoice)


export const locationOptions = async () => {
    const response = await fetch("http://localhost:8088/locations")
    const locations = await response.json()

    let locationChoicesHTML = `<h1>Thank you for choosing the Mountaineer Meat Wagon!</h1>`
    locationChoicesHTML += `<select id="location">
    <option value ="0">Choose your location!</option>`
    const divStringArray = await locations.map(
        (location) => {
            return `<option value="${location.id}" name="${location.name}">${location.name}</option>`
        }
    )
    locationChoicesHTML += divStringArray.join("")
    locationChoicesHTML += `</select>`
    locationChoicesHTML +=  `<div id="locationChosen"></div>`
    return locationChoicesHTML
}

