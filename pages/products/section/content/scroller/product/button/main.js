export default function button(){
    let style = `
        {
            font-size:18px;
            padding:5px 10px;
            border-radius:5px;
            color:var(--colorWhite);
            background:var(--colorBlue);
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorOrange);
        }
        :responsive{
            font-size:15px;
        }`

    const button = cE("div", style)
    button.innerHTML = "Fazer pedido"
    return(button)
}