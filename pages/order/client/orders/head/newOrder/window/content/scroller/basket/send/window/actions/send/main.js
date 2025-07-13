import order from "../../../../../../../../../../list/scroller/order/main.js"
import window from "./window/main.js"

export default function send(pdts){
    let style = `
        {
            font-size:20px;
            background:var(--colorOrange);
            color:var(--colorWhite);
            padding:5px 10px;
            border-radius:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlue);
        }
        :responsive{
            font-size:16px;
        }`

    const send = cE("div", style)
    send.innerHTML = "Concluir"

    let o = {
            id:1232123,
            date:"08/07/2025",
            hour:"17:29",
            status:"Em andamento",
            items:pdts
        }

    send.addEventListener(
        "click",
        async function a(e){
            let list = document.getElementById("root").children[0].children[0].children[2].children[1].children[0]
            list.insertBefore(order(o), list.children[0])

            let closeThis = e.target.parentElement.children[1]
            closeThis.click()
            let close = document.getElementById("root").children[1].children[0].children[0]
            close.click()

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

    return(send)
}