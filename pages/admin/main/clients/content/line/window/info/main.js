import data from "./data/main.js"

export default function info(c){
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
    info.appendChild(data("ID", c.id))
    info.appendChild(data("CNPJ", c.cnpj))
    info.appendChild(data("Nome da empresa", c.businessName))
    info.appendChild(data("Nome do responsável", c.responsibleName))
    info.appendChild(data("Telefone", c.phoneNumber))
    info.appendChild(data("Email", c.email))
    return(info)
}