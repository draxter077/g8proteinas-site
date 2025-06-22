export default function title(t){
    let style = `
        {
            font-size:25px;
            color:var(--colorOrange);
            padding:0px 5px;
            border-bottom:1px solid var(--colorBlue);
        }
        :responsive{
            font-size:18px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}