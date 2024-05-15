import { setLocation } from "./transientState.js";

const handleLocationChoice = (event) => {
    if (event.target.id === "location")
        setLocation(parseInt(event.target.value))
}

export const locationOptions = async () => {
    const response = await fetch("http://localhost:8088/locations")
    const locations = await response.json()
    document.addEventListener("change", handleLocationChoice)

    let locationChoicesHTML = `<h2>Thank you for choosing the Mountaineer Meat Wagon!</h2>`
    locationChoicesHTML += `<select id="location">
    <option value ="0">Choose your location!</option>`
    const divStringArray = await locations.map(
        (location) => {
            return `<option value="${location.id}">${location.name}</option>`
        }
    )
    locationChoicesHTML += divStringArray.join("")
    locationChoicesHTML += `</select>`
    return locationChoicesHTML
}