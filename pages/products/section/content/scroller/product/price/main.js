export default function price(p){
    let style = `
        {
            width:100%;
            text-align:right;
            font-size:25px;
            color:var(--colorBlue);
        }
        :responsive{
            font-size:18px;
        }`

    const price = cE("div", style)
    price.innerHTML = p
    return(price)
}