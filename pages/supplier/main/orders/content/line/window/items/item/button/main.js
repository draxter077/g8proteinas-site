import window from "./window/main.js"

export default function button(i, o){
    let style = `
        {
            font-size:20px;
            text-align:center;
            color:var(--colorWhite);
            background:var(--colorOrange);
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

    const button = cE("button", style)
    button.innerHTML = "Confirmar"

    button.addEventListener(
        "click",
        async function a(e){
            e.stopPropagation()
            e.target.disabled = true
            
            let w = window(i, o, e.target)
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 100))
            w.style.transform = "scale(1)"
        }
    )
    return(button)
}