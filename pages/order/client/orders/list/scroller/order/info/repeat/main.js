import window from "../../../../../head/newOrder/window/main.js"

export default function repeat(order, pdts){
    let style = `
        {
            height:24px;
            filter:invert(1);
            transition:transform 0.5s;
            cursor:pointer;
        }
        :hover{
            transform:rotate(180deg);
        }
        :responsive{
            height:20px;
        }`

    const repeat = cE("img", style)
    repeat.title = "Repetir pedido"
    repeat.src = "./assets/elements/repeat.png"

    repeat.addEventListener(
        "click",
        async function a(){
            let w = window(pdts, order)
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 100))
            w.style.transform = "scale(1)"
            w.children[1].children[1].click()
        }
    )
    return(repeat)
}