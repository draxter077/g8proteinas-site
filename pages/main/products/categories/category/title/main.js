export default function title(t){
    let style = `
        {
            font-size:25px;
            color:var(--colorOrange);
            padding:0px 5px;
        }
        :responsive{
            font-size:16px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}