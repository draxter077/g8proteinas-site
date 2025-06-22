export default function link(src, url){
    let style = `
        {
            height:40px;
            filter:invert(1);
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:scale(1.1);
        }`

    const link = cE("img", style)
    link.src = src
    link.addEventListener("click", () => window.open(url, "_blank"))
    return(link)
}