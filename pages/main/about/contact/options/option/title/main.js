export default function title(t){
    let style = `
        {
            font-size:23px;
            color:var(--colorWhite);
            user-select:all;
            text-align:center;
        }
        :responsive{
            font-size:18px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}