import img from "./img/main.js"
import title from "./title/main.js"
import price from "./price/main.js"
import actions from "./actions/main.js"

export default function product(p){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
            height:400px;
            width:14%;
            background:var(--colorWhite);
            margin:7px;
            padding:10px;
            border-radius:10px;
            border:1px solid var(--colorBlue);
        }
        :responsive{
            width:45%;
            height:300px;
        }`

    const product = cE("div", style)
    product.id = p.id
    product.title = p.title
    product.category = p.category
    product.price = p.price
    product.unit = p.unit
    product.revenue = p.revenue
    product.stock = p.stock
    
    product.appendChild(img(p.srcs[0]))
    product.appendChild(title(p.title, p.category))
    product.appendChild(price(p.price, p.unit))
    product.appendChild(actions(p.unit, p.stock))
    return(product)
}