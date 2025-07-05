export default function title(id, d, h, orders){
    let style = `
        {
            text-align:center;
            width:50%;
        }
        :responsive{
            margin:10px 0px;
            width:90%;
        }
        >span{
            margin:0px 7px;
            color:var(--colorBlue);
        }`

    const title = cE("div", style)
    let total = 0
    for(let i = 0; i < orders.length; i++){
        let o = orders[i]
        total += Number(o.price.split("/")[0].replaceAll(",","."))*o.quantity
    }
    title.innerHTML = `${id}<span>•</span>${d} às ${h}<span>•</span>${orders.length} ${orders.length > 1 ? "items" : "item"}<span>•</span>${stringifyNumber(total)}`
    return(title)
}