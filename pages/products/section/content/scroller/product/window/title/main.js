export default function title(t){
    let style = `
        {
            font-size:30px;
            color:var(--colorBlack);
            width:100%;
            text-align:center;
            border-top:1px solid var(--colorOrange);
            border-bottom:1px solid var(--colorOrange);
            padding:5px 0px;
        }
        :responsive{
            font-size:20px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}