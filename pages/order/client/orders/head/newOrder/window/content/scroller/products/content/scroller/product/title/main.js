export default function title(t){
    let style = `
        {
            font-size:18px;
            height:70px;
            overflow:hidden;
            width:100%;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:15px;
            height:55px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}