export default function button(){
    let style = `
        {
            font-size:23px;
            background:var(--colorOrange);
            padding:5px 10px;
            border-radius:5px;
            color:var(--colorWhite);
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlue);
        }
        :responsive{
            font-size:18px;
        }`

    const button = cE("div", style)
    button.innerHTML = "Fazer pedido"
    button.addEventListener("click", () => window.open("/pedidos", "_self"))
    return(button)
}