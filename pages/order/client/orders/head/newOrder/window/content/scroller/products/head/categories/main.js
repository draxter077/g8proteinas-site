import category from "./category/main.js"

export default function categories(){
    let style = `
        {
            display:flex;
            flex-direction:row;
        }`

    const categories = cE("div", style)
    categories.appendChild(category("./assets/elements/fish.png", "Peixes"))
    categories.appendChild(category("./assets/elements/shrimp.png", "Frutos do mar"))
    categories.appendChild(category("./assets/elements/cow.png", "Bovinos"))
    categories.appendChild(category("./assets/elements/pig.png", "Suínos"))
    categories.appendChild(category("./assets/elements/vegan.png", "Veganos"))
    categories.appendChild(category("./assets/elements/sheep.png", "Ovinos"))
    categories.appendChild(category("./assets/elements/chicken.png", "Frangos"))
    return(categories)
}