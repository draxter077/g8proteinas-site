export default function title(t, q){
    let style = `
        {
            width:50%;
            font-size:14px;
            color:var(--colorBlack);
        }`

    const title = cE("div", style)
    title.innerHTML = `${q}kg de ${t}`
    return(title)
}