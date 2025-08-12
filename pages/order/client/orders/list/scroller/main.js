import order from "./order/main.js"

export default function scroller(orders, pdts){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:fit-content;
        }`

    const scroller = cE("div", style)
    for(let i = orders.length - 1; i >= 0; i--){scroller.appendChild(order(orders[i], pdts))}
    return(scroller)
}