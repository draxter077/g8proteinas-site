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
            height:350px;
            aspect-ratio:0.65;
            background:var(--colorWhite);
            margin:7px;
            padding:10px;
            border-radius:10px;
            border:1px solid var(--colorBlue);
        }
        :responsive{
            height:33svh;
        }`

    const product = cE("div", style)
    product.id = p.id
    product.appendChild(img(p.srcs[0]))
    product.appendChild(title(p.title))
    product.appendChild(price(p.price))
    product.appendChild(actions())
    return(product)
}