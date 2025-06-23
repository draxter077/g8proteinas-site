export default function title(t){
    let style = `
        {
            font-size:24px;
            color:var(--colorWhite);
            border-bottom:1px solid var(--colorBlue);
            width:100%;
            padding:0px 5px;
        }
        :responsive{
            font-size:18px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}