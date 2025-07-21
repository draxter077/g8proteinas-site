export default function send(i, o, btn){
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
    send.innerHTML = "Continuar"

    send.addEventListener(
        "click",
        async function a(e){
            e.target.disabled = true

            await axios.post(apiURL + "/admin/post/endOrderItem", {orderID: o.id, pID:i.id})
                .then(r => {
                    let closeThis = e.target.parentElement.children[1]
                    closeThis.click()

                    btn.style.display = "none"
                    btn.parentElement.children[1].innerHTML = btn.parentElement.children[1].innerHTML.replaceAll("Aguardando confirmação", "Confirmado")

                    let items = btn.parentElement.parentElement.children
                    for(let i = 0; i < items.length; i++){
                        if(items[i].children[1].innerHTML.includes("Aguardando confirmação")){break}
                        else if(i == items.length - 1){
                            document.getElementById(o.id).style.background = "none"
                            document.getElementById(o.id).style.color = "var(--colorWhite)"
                            document.getElementById(o.id).innerHTML = document.getElementById(o.id).innerHTML.replaceAll("Aguardando confirmação", "Confirmado")
                            
                            let close = document.getElementById("root").children[1].children[0].children[0]
                            close.click()
                        }
                    }
                })
                .catch(r => alert("Algum problema foi encontrado"))

            e.target.disabled = false
        }
    )

    return(send)
}