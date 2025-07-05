export default function title(id, d, h, orders){
    let style = `
        {
            text-align:center;
        }
        :responsive{
            margin:10px 0px;
        }
        >span{
            margin:0px 7px;
            color:var(--colorBlue);
        }`

    const title = cE("div", style)
    let total = 0
    for(let i = 0; i < orders.length; i++){
        let o = orders[i]
        total += Number(o.price.replaceAll(",","."))*o.quantity
    }
    title.innerHTML = `${id}<span>•</span>${d} às ${h}<span>•</span>${orders.length} ${orders.length > 1 ? "items" : "item"}<span>•</span>R$${total}`
    return(title)
}