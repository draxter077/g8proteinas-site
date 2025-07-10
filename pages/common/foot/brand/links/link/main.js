export default function link(src, url){
    let style = `
        {
            height:30px;
            filter:invert(1);
            cursor:pointer;
            transition:filter 0.5s;
        }
        :hover{
            filter:invert(0.4);
        }
        :responsive{
            height:20px;
        }`

    const link = cE("img", style)
    link.src = src
    link.addEventListener("click", () => window.open(url, "_blank"))
    return(link)
}