import photo from "./photo/main.js"

export default function scroller(){
    let style = `
        {
            display:flex;
            flex-direction:row;
        }`

    const scroller = cE("div", style)
    scroller.appendChild(photo())
    scroller.appendChild(photo())
    scroller.appendChild(photo())
    scroller.appendChild(photo())
    scroller.appendChild(photo())
    scroller.appendChild(photo())
    return(scroller)
}