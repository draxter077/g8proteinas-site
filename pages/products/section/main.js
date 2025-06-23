import title from "./title/main.js"
import content from "./content/main.js"

export default function section(t, pdts){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            margin:5vh 0px 0px 0px;
        }`

    const section = cE("div", style)
    section.appendChild(title(t))
    section.appendChild(content(pdts))
    return(section)
}