import img from "./img/main.js"
import title from "./title/main.js"
import total from "./total/main.js"
import cancel from "./cancel/main.js"

export default function line(p, q){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:100%;
            font-size:20px;
            padding:5px 10px;
            margin:1px 0px;
            border:1px solid var(--colorBlue);
            border-radius:5px;
            color:black;
        }`

    const line = cE("div", style)
    line.id = p.id
    line.title = p.title
    line.quantity = q
    line.price = p.price
    line.unit = p.unit
    line.revenue = p.revenue
    
    line.appendChild(img(`https://www.g8proteinas.com.br/assets/products/${p.id}_0`))
    line.appendChild(title(p.title, q))
    line.appendChild(total(q, p.price))
    line.appendChild(cancel())
    return(line)
}