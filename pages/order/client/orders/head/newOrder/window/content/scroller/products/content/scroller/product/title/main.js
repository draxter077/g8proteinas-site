export default function title(t, c, i){
    let style = `
        {
            font-size:18px;
            height:80px;
            overflow:hidden;
            width:100%;
            color:var(--colorBlack);
            padding:5px 0px;
            border-top:1px solid var(--colorOrange);
            cursor:pointer;
        }
        :responsive{
            font-size:15px;
            height:65px;
        }`

    const title = cE("div", style)
    title.innerHTML = t + " - " + c
    title.addEventListener("click", () => window.open(`/produtos?${i}`, "_blank"))
    return(title)
}