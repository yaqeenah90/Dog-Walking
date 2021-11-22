import { getWalkers } from "./database.js"
//parameters were left open for getWalker(s) also added an s //
const walkers = getWalkers("Walkers")


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const currentWalker of walkers) {
        citiesHTML += `<li>${currentWalker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

