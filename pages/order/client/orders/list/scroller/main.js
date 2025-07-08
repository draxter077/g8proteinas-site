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
    for(let i = 0; i < orders.length; i++){scroller.appendChild(order(orders[i], pdts))}
    return(scroller)
}