import data from "./data/main.js"

export default function info(p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            flex-wrap:wrap;
            width:100%;
            height:40%;
            overflow-y:scroll;
        }`

    const info = cE("div", style)
    info.appendChild(data("ID", p.id))
    info.appendChild(data("Título", p.title))
    info.appendChild(data("Categoria", p.category))
    info.appendChild(data("Unidade", p.unit))
    info.appendChild(data("Estoque", p.stock))
    info.appendChild(data("Preço da unidade", p.price))
    info.appendChild(data("Observação", p.observation.replaceAll("<br>", "\n")))
    return(info)
}