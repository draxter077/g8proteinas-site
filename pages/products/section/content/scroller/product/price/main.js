import integer from "./integer/main.js"
import float from "./float/main.js"
import unit from "./unit/main.js"

export default function price(p, u){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:flex-end;
            align-items:flex-start;
            width:100%;
        }`

    const price = cE("div", style)
    p = stringifyNumber(p).replaceAll("R$ ", "")
    price.appendChild(integer(p.split(",")[0]))
    price.appendChild(float(p.split(",")[1]))
    price.appendChild(unit(u))
    return(price)
}