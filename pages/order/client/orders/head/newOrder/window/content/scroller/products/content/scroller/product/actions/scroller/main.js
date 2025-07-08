import select from "./select/main.js"
import quantity from "./quantity/main.js"

export default function scroller(u){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:200%;
            transition:transform 0.25s;
        }`

    const scroller = cE("div", style)
    scroller.appendChild(select())
    scroller.appendChild(quantity(u))
    return(scroller)
}