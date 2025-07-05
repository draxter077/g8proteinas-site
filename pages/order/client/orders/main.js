import head from "./head/main.js"
import list from "./list/main.js"

export default function orders(data){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:95%;
            margin:5vh 0px;
        }`

    const orders = cE("div", style)
    orders.appendChild(head(data.user.id, data.products))
    orders.appendChild(list(data.orders, data.products))
    return(orders)
}