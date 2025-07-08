export default function remove(){
    let style = `
        {
            font-size:15px;
            background:var(--colorBlack);
            padding:2px 5px;
            border-radius:5px;
            color:var(--colorWhite);
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:red;
        }`

    const remove = cE("div", style)
    remove.innerHTML = "✕"

    remove.addEventListener("click", (e) => e.target.parentElement.parentElement.style.transform = "translateX(0%)")
    return(remove)
}