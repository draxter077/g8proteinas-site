export default function currency(){
    let style = `
        {
            font-size:22px;
            color:var(--colorBlue);
            margin:12px 5px 0px 0px;
        }
        :responsive{
            font-size:17px;
        }`

    const currency = cE("div", style)
    currency.innerHTML = "R$"
    return(currency)
}