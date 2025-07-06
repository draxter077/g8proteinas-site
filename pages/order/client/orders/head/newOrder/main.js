import window from "./window/main.js"

export default function newOrder(id, products){
    let style = `
        {
            font-size:20px;
            padding:5px 10px;
            border-radius:5px;
            background:var(--colorWhite);
            color:var(--colorBlack);
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            background:var(--colorOrange);
            color:var(--colorWhite);
        }
        :responsive{
            font-size:17px;
        }`

    const newOrder = cE("div", style)
    newOrder.innerHTML = "Novo pedido"

    newOrder.addEventListener(
        "click",
        async function a(){
            let w = window(id, products)
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 100))
            w.style.transform = "scale(1)"
        }
    )
    return(newOrder)
}