import value from "./value/main.js"
import add from "./add/main.js"
import remove from "./remove/main.js"

export default function quantity(u, s){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:50%;
        }`

    const quantity = cE("div", style)
    quantity.appendChild(value(u))
    quantity.appendChild(add(s, u))
    quantity.appendChild(remove())
    return(quantity)
}