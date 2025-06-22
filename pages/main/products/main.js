import title from "./title/main.js"
import categories from "./categories/main.js"
import qualities from "./qualities/main.js"
import button from "./button/main.js"

export default function products(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            padding:10vh 0px 0px 0px;
            background:var(--colorBlack);
            box-shadow:0px 0px 5px 0px var(--colorBlack);
        }`

    const products = cE("div", style)
    products.appendChild(title())
    products.appendChild(categories())
    products.appendChild(qualities())
    products.appendChild(button())
    return(products)
}