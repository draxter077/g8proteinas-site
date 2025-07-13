import img from "./img/main.js"
import title from "./title/main.js"
import price from "./price/main.js"

import window from "./window/main.js"

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
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:scale(1.02) !important;
        }
        :responsive{
            height:33svh;
        }`

    const product = cE("div", style)
    product.id = p.id
    product.appendChild(img(p.srcs[0]))
    product.appendChild(title(p.title, p.category))
    product.appendChild(price(p.price, p.unit))

    product.addEventListener(
        "click",
        async function a(){
            let w = window(p)
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 100))
            w.style.transform = "translateX(0%)"
        }
    )
    return(product)
}