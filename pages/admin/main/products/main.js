import title from "./title/main.js"
import content from "./content/main.js"

export default function products(pdts){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            margin:2.5vh 0px 0px 0px;
        }` 

    const products = cE("div", style)
    products.appendChild(title())
    products.appendChild(content(pdts))
    return(products)
}