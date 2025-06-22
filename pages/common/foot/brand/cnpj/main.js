export default function cnpj(){
    let style = `
        {
            font-size:15px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:11px;
        }`

    const cnpj = cE("div", style)
    cnpj.innerHTML = "CNPJ 00.000.000/0001-00"
    return(cnpj)
}