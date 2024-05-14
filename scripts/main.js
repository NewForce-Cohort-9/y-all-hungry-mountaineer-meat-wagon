import { locationOptions } from "./locationsList.js";

const container = document.querySelector("#container")

const render = async () => {
    const locationOptionsHTML = await locationOptions()

    const compostedHTML =`
    <section>
    ${locationOptionsHTML}
    </section>`
    container.innerHTML = compostedHTML
}

render()