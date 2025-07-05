export default function contact(){
    let style = `
        {
            font-size:31px;
            color:var(--colorWhite);
            padding:0px 5px;
            border-bottom:1px solid var(--colorBlue);
            margin:0px 0px 5vh 0px;
            width:100%;
        }
        :responsive{
            font-size:23px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Entre em contato"
    return(title)
}