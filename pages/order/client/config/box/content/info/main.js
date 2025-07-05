import value from "./value/main.js"

export default function info(){
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
    info.appendChild(value("CNPJ","00.000.000/0001-00"))
    info.appendChild(value("Nome da Empresa","JA Grillo LTDA"))
    info.appendChild(value("Nome do Responsável","João A. Grillo"))
    info.appendChild(value("Email","grillo@jagrillo.com.br"))
    info.appendChild(value("Telefone","(51) 8551-8360"))
    info.appendChild(value("Senha",""))
    return(info)
}