import scroller from "./scroller/main.js"

export default function content(pdts, order){
    let style = `
        {
            height:100%;
            width:100%;
            overflow:hidden;
            margin:10px 0px 0px 0px;
        }`

    const content = cE("div", style)
    content.appendChild(scroller(pdts, order))
    return(content)
}