import info from "./info/main.js"
import items from "./items/main.js"

export default function order(o, pdts){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            border-bottom:1px solid var(--colorBlue);
            padding:5px 10px;
        }`

    const order = cE("div", style)
    order.appendChild(info(o, pdts))
    order.appendChild(items(o.items))
    return(order)
}