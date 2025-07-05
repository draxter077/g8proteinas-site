import search from "./search/main.js"
import categories from "./categories/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
            margin:0px 0px 10px 0px;
        }`

    const head = cE("div", style)
    head.appendChild(search())
    head.appendChild(categories())
    return(head)
}