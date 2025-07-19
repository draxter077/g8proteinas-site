import line from "../../products/content/scroller/product/actions/scroller/quantity/add/line/main.js"

export default function products(order){
    let style = `
        {
            display:flex;
            flex-direction:column;
            flex-wrap:nowrap;
            height:100%;
            width:100%;
            overflow-y:scroll;
        }`

    const products = cE("div", style)

    if(order != undefined){
        for(let i = 0; i < order.items.length; i++){
            let item = order.items[i]
            item.price = item.currentPrice
            item.revenue = item.currentRevenue
            products.appendChild(line(item, item.quantity))
        }
    }
    return(products)
}