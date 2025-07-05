import scroller from "./scroller/main.js"

export default function list(orders, products){
    let style = `
        {
            height:80svh;
            width:100%;
            border:1px solid red;
            overflow-y:scroll;
        }`

    const list = cE("div", style)
    list.appendChild(scroller(orders, products))
    return(list)
}