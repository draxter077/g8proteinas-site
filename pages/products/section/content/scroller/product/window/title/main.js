export default function title(t){
    let style = `
        {
            font-size:30px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:20px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}