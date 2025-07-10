export default function value(v, t){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:15px;
        }`

    const value = cE("input", style)
    value.value = v
    if(t == "ID" || t == "CNPJ"){value.disabled = true}
    return(value)
}