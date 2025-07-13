import login from "./login/main.js"
import client from "./client/main.js"

export default function order(log){
    let style = `
        {
            width:100%;
            opacity:0;
            transition:opacity 0.5s;
        }`

    const order = cE("div", style)
    if(log == undefined){
        order.appendChild(login())
    }
    else{
        order.appendChild(client(log))
        order.style.opacity = 1
    }

    window.addEventListener("load", () => order.style.opacity = 1)
    return(order)
}