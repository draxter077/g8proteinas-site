import img from "./img/main.js"
import title from "./title/main.js"

export default function item(i, pdts){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            font-size:18px;
            color:var(--colorWhite);
            padding:5px 10px;
            width:100%;
        }
        :responsive{
            font-size:12px;
        }`

    const item = cE("div", style)
    let t, src, q, price
    for(let k = 0; k < pdts.length; k++){
        let p = pdts[k]
        if(p.id == i.id){
            t = p.title
            src = p.srcs[0]
            q = i.quantity
            price = i.price
            break
        }
    }

    item.appendChild(img(src))
    item.appendChild(title(t, q, price))
    return(item)
}