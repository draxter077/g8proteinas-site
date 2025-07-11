import products from "./products/main.js"
import send from "./send/main.js"

export default function basket(order){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:50%;
            height:100%;
        }`

    const basket = cE("div", style)
    basket.appendChild(products(order))
    basket.appendChild(send())
    return(basket)
}