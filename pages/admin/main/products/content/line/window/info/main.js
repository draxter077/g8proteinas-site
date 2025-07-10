import data from "./data/main.js"

export default function info(p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            flex-wrap:wrap;
            width:100%;
            height:40%;
            overflow-y:scroll;
        }`

    const info = cE("div", style)
    info.appendChild(data("ID", p.id))
    info.appendChild(data("Preço", stringifyNumber(p.price)))
    info.appendChild(data("Unidade", p.unit))
    info.appendChild(data("Título", p.title))
    return(info)
}