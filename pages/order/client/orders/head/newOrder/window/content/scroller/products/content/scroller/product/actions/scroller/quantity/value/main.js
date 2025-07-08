import input from "./input/main.js"
import unit from "./unit/main.js"

export default function value(u){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-end;
            width:50%;
        }`

    const value = cE("div", style)
    value.appendChild(input())
    value.appendChild(unit(u))
    return(value)
}