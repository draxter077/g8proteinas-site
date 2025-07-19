import scroller from "./scroller/main.js"

export default function content(id, pdts){
    let style = `
        {
            height:660px;
            width:100%;
            overflow-x:scroll;
        }
        :responsive{
            height:110svh;
        }`

    const content = cE("div", style)
    content.appendChild(scroller(id, pdts))
    return(content)
}