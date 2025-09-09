import category from "./category/main.js"

export default function categories(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:80%;
            margin:7.5vh 0px 0px 0px;
        }`

    const categories = cE("div", style)
    categories.appendChild(category("./assets/elements/fish.png","Peixes"))
    categories.appendChild(category("./assets/elements/shrimp.png","Frutos do mar"))
    categories.appendChild(category("./assets/elements/cow.png","Bovinos"))
    categories.appendChild(category("./assets/elements/pig.png","Suínos"))
    categories.appendChild(category("./assets/elements/vegan.png","Veganos"))
    categories.appendChild(category("./assets/elements/sheep.png","Ovinos"))
    categories.appendChild(category("./assets/elements/chicken.png","Frangos"))
    return(categories)
}