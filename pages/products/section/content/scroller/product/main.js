import img from "./img/main.js"
import title from "./title/main.js"

import window from "./window/main.js"

export default function product(p){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            height:300px;
            aspect-ratio:0.65;
            background:var(--colorWhite);
            margin:7px;
            padding:10px;
            border-radius:10px;
            border-bottom:10px solid var(--colorWhite);
            cursor:pointer;
            transition:border 0.5s;
        }
        :hover{
            border-bottom:10px solid var(--colorOrange);
        }
        :responsive{
            height:33svh;
        }`

    const product = cE("div", style)
    product.id = p.id
    product.appendChild(img(p.srcs[0]))
    product.appendChild(title(p.title, p.category))

    product.addEventListener(
        "click",
        async function a(e){
            Window.history.pushState('', '', `/produtos?${p.id}`)
            let w = window(p)
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 100))
            w.style.transform = "translateX(0%)"
        }
    )
    return(product)
}