export default function button(){
    let style = `
        {
            font-size:20px;
        }`

    const button = cE("div", style)
    button.innerHTML = "Fazer pedido"
    button.addEventListener("click", () => window.open("/pedidos", "_self"))
    return(button)
}