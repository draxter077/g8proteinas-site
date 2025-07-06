import scroller from "./scroller/main.js"

export default function content(pdts){
    let style = `
        {
            height:740px;
            width:100%;
            overflow-x:scroll;
        }
        :responsive{
            height:110svh;
        }`

    const content = cE("div", style)
    content.appendChild(scroller(pdts))
    return(content)
}