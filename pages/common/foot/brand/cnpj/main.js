export default function cnpj(){
    let style = `
        {
            font-size:12px;
            color:var(--colorWhite);
            user-select:text;
        }
        :responsive{
            font-size:8px;
            order:2;
        }`

    const cnpj = cE("div", style)
    cnpj.innerHTML = "CNPJ 00.000.000/0001-00"
    return(cnpj)
}