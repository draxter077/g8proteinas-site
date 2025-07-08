export default function button(){
    let style = `
        {
            font-size:16px;
            background:var(--colorOrange);
            color:var(--colorWhite);
            padding:5px 10px;
            border-radius:5px;
            text-align:center;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlue);
        }`

    const button = cE("div", style)
    button.innerHTML = "Selecionar"

    button.addEventListener("click", async (e) => {e.target.parentElement.parentElement.style.transform = "translateX(-50%)";await new Promise(resolve => setTimeout(resolve, 250));e.target.parentElement.parentElement.children[1].children[0].children[0].focus()})
    return(button)
}