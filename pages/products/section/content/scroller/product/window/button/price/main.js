export default function price(){
    let style = `
        {
            font-size:20px;
            color:var(--colorBlack);
            width:100%;
            text-align:right;
        }`

    const price = cE("div", style)
    price.innerHTML = "R$ 50,00/kg"
    return(price)
}