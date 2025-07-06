import button from "./button/main.js"

export default function change(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:80%;
            border-radius:5px;
            border:1px solid var(--colorOrange);
            overflow:hidden;
        }
        :responsive{
            width:90%;
        }`

    const change = cE("div", style)
    change.appendChild(button("Produtos"))
    change.appendChild(button("Carrinho"))

    window.addEventListener("click", function a(){change.children[0].style.background = "var(--colorOrange)";change.children[0].style.color = "var(--colorWhite)";window.removeEventListener("click", a)})
    return(change)
}