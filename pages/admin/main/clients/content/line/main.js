export default function line(c){
    let style = `
        {
            font-size:22px;
            color:red;
        }`

    const line = cE("div", style)
    line.innerHTML = c.cnpj
    return(line)
}