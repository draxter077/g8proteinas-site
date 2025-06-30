export default function button(){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            background:var(--colorBlue);
            padding:5px 10px;
            border-radius:5px;
        }`

    const button = cE("div", style)
    button.innerHTML = "Salvar"
    return(button)
}