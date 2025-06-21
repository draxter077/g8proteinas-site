export default function link(t, url){
    let style = `
        {
            position:relative;
            font-size:20px;
            color:var(--colorWhite);
            padding:2px 5px;
            cursor:pointer;
        }
        ::after{
            position:absolute;
            bottom:0%;
            left:0%;

            content:"";
            height:1px;
            width:0%;
            background:var(--colorOrange);
            transition:width 0.5s;
        }
        :hover::after{
            width:100%;
        }
        :responsive{
            font-size:17px;
        }`

    const link = cE("div", style)
    link.innerHTML = t
    link.addEventListener("click", () => window.open(url, "_blank"))
    return(link)
}