import currency from "./currency/main.js"
import integer from "./integer/main.js"
import float from "./float/main.js"
import unit from "./unit/main.js"

export default function price(p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
        }`

    const price = cE("div", style)
    price.appendChild(currency())
    price.appendChild(integer(p.split(",")[0]))
    price.appendChild(float(p.split(",")[1].split("/")[0]))
    price.appendChild(unit(p.split("/")[1]))
    return(price)
}