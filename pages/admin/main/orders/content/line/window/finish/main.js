import window from "./window/main.js"

export default function finish(o){
    let style = `
        {
            width:80%;
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

    const finish = cE("div", style)
    finish.innerHTML = "Concluir pedido"

    finish.addEventListener(
        "click",
        async function a(){
            let w = window(o)
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 100))
            w.style.transform = "scale(1)"
        }
    )
    return(finish)
}