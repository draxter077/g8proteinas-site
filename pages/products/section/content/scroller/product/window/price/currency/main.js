export default function currency(){
    let style = `
        {
            font-size:25px;
            color:var(--colorBlue);
            margin:9px 5px 0px 0px;
        }
        :responsive{
            font-size:20px;
        }`

    const currency = cE("div", style)
    currency.innerHTML = "R$"
    return(currency)
}