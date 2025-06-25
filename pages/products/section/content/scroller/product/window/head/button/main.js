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
            transition:transform 0.5s;
        }
        :hover{
            transform:scale(1.1);
        }`

    const button = cE("div", style)
    button.innerHTML = "✕"
    button.addEventListener(
        "click",
        function a(e){
            document.getElementById("root").removeChild(e.target.parentElement.parentElement)
        }
    )
    return(button)
}