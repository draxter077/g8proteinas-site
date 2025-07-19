import value from "./value/main.js"

export default function info(data){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
        }
        :responsive{
            flex-direction:column;
        }`

    const info = cE("div", style)
    info.appendChild(value("CNPJ",data.cnpj))
    info.appendChild(value("Nome da Empresa",data.businessName))
    info.appendChild(value("Email",data.email))
    info.appendChild(value("Telefone",data.phoneNumber))
    info.appendChild(value("Endereço",data.address))
    info.appendChild(value("Senha",""))
    return(info)
}