import scroller from "./scroller/main.js"

export default function content(pdts){
    let style = `
        {
            width:100%;
            overflow-x:scroll;
        }`

    const content = cE("div", style)
    content.appendChild(scroller(pdts))
    return(content)
}