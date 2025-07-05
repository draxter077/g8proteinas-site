export default function title(t){
    let style = `
        {
            font-size:24px;
            color:var(--colorWhite);
            border-right:1px solid var(--colorBlue);
            border-left:1px solid var(--colorBlue);
            padding:0px 10px;
            margin:0px 0px 10px 0px;
        }
        :responsive{
            font-size:18px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}