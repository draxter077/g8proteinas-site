import logo from "./logo/main.js"
import link from "./link/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
            padding:5px;
            background:var(--colorBlack);
            box-shadow:0px 0px 3px 0px var(--colorBlue);
        }`

    const head = cE("div", style)
    head.appendChild(link("Início", "/"))
    head.appendChild(logo())
    head.appendChild(link("Pedidos", "/pedidos"))
    return(head)
}