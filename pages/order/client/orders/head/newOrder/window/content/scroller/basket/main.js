import products from "./products/main.js"
import actions from "./actions/main.js"

export default function basket(order){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:50%;
            height:100%;
        }`

    const basket = cE("div", style)
    basket.appendChild(products(order))
    basket.appendChild(actions())
    return(basket)
}