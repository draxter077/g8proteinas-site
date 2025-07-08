export default function send(){
    let style = `
        {
            font-size:20px;
            padding:6px 10px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            border-radius:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlack);
        }
        :responsive{
            font-size:15px;
        }`

    const send = cE("div", style)
    send.innerHTML = "Finalizar pedido"

    send.addEventListener(
        "click",
        function a(e){
            let products = e.target.parentElement.parentElement.children[0].children
            let ids = []
            for(let i = 0; i < products.length; i++){ids.push(products[i].id)}
            alert(ids)
        }
    )
    return(send)
}