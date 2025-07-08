import line from "./line/main.js"
import window from "./window/main.js"

export default function add(){
    let style = `
        {
            height:22px;
            aspect-ratio:1;
            background:var(--colorBlue);
            padding:5px 5px;
            border-radius:5px;
            filter:invert(1);
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorOrange);
        }`

    const add = cE("img", style)
    add.src = "./assets/elements/check.png"

    add.addEventListener(
        "click", 
        async function a(e){
            let product = e.target.parentElement.parentElement.parentElement.parentElement
            let src = product.children[0].src
            let id = product.id
            let title = product.children[1].innerHTML
            let priceInteger = product.children[2].children[0].innerHTML
            let priceFloat = product.children[2].children[1].innerHTML
            let quantity = e.target.parentElement.children[0].children[0].value

            let basketList = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0]
            basketList.appendChild(line(id, src, title, quantity, Number(`${priceInteger}.${priceFloat}`)))
            e.target.parentElement.parentElement.style.transform = "translateX(0%)"

            let w = window()
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 100))
            w.style.transform = "translateY(0%)"
            await new Promise(resolve => setTimeout(resolve, 5000))
            w.style.transform = "translateY(-200%)"
            await new Promise(resolve => setTimeout(resolve, 600))
            document.getElementById("root").removeChild(w)
        }
    )
    return(add)
}