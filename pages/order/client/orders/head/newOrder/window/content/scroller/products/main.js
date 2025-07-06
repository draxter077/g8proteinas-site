import head from "./head/main.js"
import content from "./content/main.js"

export default function products(pdts){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:50%;
        }`

    const products = cE("div", style)
    products.appendChild(head())
    products.appendChild(content(pdts))
    return(products)
}