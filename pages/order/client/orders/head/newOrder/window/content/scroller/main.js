import products from "./products/main.js"
import basket from "./basket/main.js"

export default function scroller(pdts, order){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:200%;
            height:100%;
            transition:transform 0.5s;
        }`

    const scroller = cE("div", style)
    scroller.appendChild(products(pdts))
    scroller.appendChild(basket(order))
    return(scroller)
}