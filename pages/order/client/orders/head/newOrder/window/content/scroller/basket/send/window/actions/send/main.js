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

    const send = cE("button", style)
    send.innerHTML = "Concluir"

    send.addEventListener(
        "click",
        async function a(e){
            e.target.disabled = true

            async function showWindow(t){
                let w = window(t)
                document.getElementById("root").appendChild(w)
                await new Promise(resolve => setTimeout(resolve, 100))
                w.style.transform = "translateY(0%)"
                await new Promise(resolve => setTimeout(resolve, 5000))
                w.style.transform = "translateY(-200%)"
                await new Promise(resolve => setTimeout(resolve, 600))
                document.getElementById("root").removeChild(w)
            }

            await axios.post(apiURL + "/order/post/newOrder", {items:pdts})
                .then(r => {
                    let list = document.getElementById("root").children[0].children[0].children[2].children[1].children[0]
                    list.insertBefore(order(r.data, pdts), list.children[0])

                    let closeThis = e.target.parentElement.children[1]
                    closeThis.click()
                    let close = document.getElementById("root").children[1].children[0].children[0]
                    close.click()

                    showWindow("Pedido enviado com sucesso")
                })
                .catch(r => showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente"))
            
            e.target.disabled = false
        }
    )

    return(send)
}