export default function button(){
    let style = `
        {
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:20px;
            height:30px;
            color:var(--colorWhite);
            border-radius:100%;
            aspect-ratio:1;
            cursor:pointer;
            background:var(--colorBlue);
        }`

    const button = cE("div", style)
    button.innerHTML = "✕"
    
    button.addEventListener(
        "click",
        async function a(e){
            let w = e.target.parentElement.parentElement
            w.style.transform = "translateX(-200%)"
            await new Promise(resolve => setTimeout(resolve, 500))
            document.getElementById("root").removeChild(w)
        }
    )
    return(button)
}