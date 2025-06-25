export default function price(){
    let style = `
        {
            font-size:20px;
            color:var(--colorBlack);
        }`

    const price = cE("div", style)
    price.innerHTML = "R$ 50,00/kg"
    return(price)
}