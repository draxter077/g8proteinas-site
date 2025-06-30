export default function title(t){
    let style = `
        {
            font-size:13px;
            color:var(--colorOrange);
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}