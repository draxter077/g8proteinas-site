export default function button(){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            cursor:pointer;
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