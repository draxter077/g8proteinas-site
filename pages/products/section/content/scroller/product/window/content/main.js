import photos from "./photos/main.js"
import info from "./info/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
            width:100%;
            height:100%;
        }`

    const content = cE("div", style)
    content.appendChild(photos())
    content.appendChild(info())
    return(content)
}