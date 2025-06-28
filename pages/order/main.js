import login from "./login/main.js"
import client from "./client/main.js"

export default function order(log){
    let style = `
        {
            width:100%;
        }`

    const order = cE("div", style)
    if(log == undefined){
        order.appendChild(login())
    }
    else{
        order.appendChild(client(log))
    }
    return(order)
}