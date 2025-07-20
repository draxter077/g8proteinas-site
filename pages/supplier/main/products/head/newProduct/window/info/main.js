import data from "./data/main.js"

export default function info(){
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
    info.appendChild(data("Título", ""))
    info.appendChild(data("Categoria", ""))
    info.appendChild(data("Unidade", "kg/unid"))
    info.appendChild(data("Preço da unidade", "1234,50"))
    info.appendChild(data("Lucro por unidade", "1234,50"))
    info.appendChild(data("Fornecedor", "ID"))
    info.appendChild(data("Observação", ""))
    return(info)
}