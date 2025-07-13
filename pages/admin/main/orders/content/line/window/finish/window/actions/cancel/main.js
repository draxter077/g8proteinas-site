export default function cancel(){
    let style = `
        {
            position:relative;
            font-size:18px;
            color:var(--colorBlack);
            padding:0px 5px;
            cursor:pointer;
        }
        ::after{
            position:absolute;
            left:0%;
            bottom:0%;

            content:"";
            width:0%;
            height:1px;
            background:var(--colorBlue);
            transition:width 0.5s;
        }
        :hover::after{
            width:100%;
        }
        :responsive{
            font-size:14px;
        }`

    const cancel = cE("div", style)
    cancel.innerHTML = "Cancelar"

    cancel.addEventListener(
        "click",
        async function a(e){
            let w = e.target.parentElement.parentElement
            w.style.transform = "scale(0)"
            await new Promise(resolve => setTimeout(resolve, 600))
            document.getElementById("root").removeChild(w)
        }
    )
    return(cancel)
}