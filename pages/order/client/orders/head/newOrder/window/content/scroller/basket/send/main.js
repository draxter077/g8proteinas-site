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
                pdts.push(
                    {
                        id:p.id,
                        srcs:[`https://www.g8proteinas.com.br/assets/products/${p.id}_0`],
                        quantity:p.quantity,
                        price:p.price,
                        newStock: p.newStock,
                        revenue:Math.round(p.revenue*p.price*100)/100,
                        title:p.title
                    }
                )
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