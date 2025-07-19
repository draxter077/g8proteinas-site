export default function send(o){
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
    send.innerHTML = "Continuar"

    send.addEventListener(
        "click",
        async function a(e){
            await axios.post(apiURL + "/admin/post/endOrder", {orderID: o.id})
                .then(r => {
                    document.getElementById(o.id).style.background = "none"
                    document.getElementById(o.id).style.color = "var(--colorWhite)"
                    document.getElementById(o.id).innerHTML = document.getElementById(o.id).innerHTML.replaceAll("Em andamento", "Concluído")

                    let closeThis = e.target.parentElement.children[1]
                    closeThis.click()
                    let close = document.getElementById("root").children[1].children[0].children[0]
                    close.click()
                })
                .catch(r => alert("Algum problema foi encontrado"))
        }
    )

    return(send)
}