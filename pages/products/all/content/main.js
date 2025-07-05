import scroller from "./scroller/main.js"

export default function content(id, pdts){
    let style = `
        {
            height:740px;
            width:100%;
            overflow-x:scroll;
        }
        :responsive{
            height:890px;
        }`

    const content = cE("div", style)
    content.appendChild(scroller(id, pdts))
    return(content)
}