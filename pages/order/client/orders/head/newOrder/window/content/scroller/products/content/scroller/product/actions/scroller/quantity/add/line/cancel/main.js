export default function cancel(){
    let style = `
        {
            font-size:15px;
            padding:2px 5px;
            border-radius:5px;
            background:var(--colorBlack);
            color:var(--colorWhite);
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:red;
        }`

    const cancel = cE("div", style)
    cancel.innerHTML = "✕"

    cancel.addEventListener("click", (e) => e.target.parentElement.parentElement.removeChild(e.target.parentElement))
    return(cancel)
}