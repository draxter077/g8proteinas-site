export default function title(){
    let style = `
        {
            font-size:31px;
            color:var(--colorWhite);
            padding:0px 10px;
            width:50%;
            border-left:1px solid var(--colorOrange);
            border-right:1px solid var(--colorOrange);
            text-align:center;
        }
        :responsive{
            font-size:23px;
            width:95%;
        }`

    const title = cE("div", style)
    title.innerHTML = "Somos especialistas na distribuição de proteínas"
    return(title)
}