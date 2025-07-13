import window from "./window/main.js"

export default function send(){
    let style = `
        {
            width:80%;
            font-size:20px;
            text-align:center;
            padding:6px 10px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            border-radius:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorOrange);
        }
        :responsive{
            font-size:15px;
        }`

    const send = cE("div", style)
    send.innerHTML = "Finalizar pedido"

    send.addEventListener(
        "click",
        async function a(e){
            let products = e.target.parentElement.children[0].children

            let pdts = []
            for(let i = 0; i < products.length; i++){
                let p = products[i]
                let id = p.id
                let src = p.children[0].src
                let title = p.children[1].innerHTML
                let quantity = Number(title.split(" ")[0].replaceAll("kg","").replaceAll("unid",""))
                let price = Number(p.children[2].innerHTML.split("(R$ ")[1].split("/")[0].replaceAll(",","."))
                pdts.push({id:id, srcs:[src], quantity:quantity, price:price, title:title.split("kg de")[1]})
            }
            
            if(pdts.length > 0){
                let w = window(pdts)
                document.getElementById("root").appendChild(w)
                await new Promise(resolve => setTimeout(resolve, 100))
                w.style.transform = "scale(1)"
            }
        }
    )
    return(send)
}