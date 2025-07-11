export default function title(t){
    let style = `
        {
            font-size:18px;
            height:80px;
            overflow:hidden;
            width:100%;
            color:var(--colorBlack);
            padding:5px 0px;
            border-top:1px solid var(--colorOrange);
        }
        :responsive{
            font-size:15px;
            height:65px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}