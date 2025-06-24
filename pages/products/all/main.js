import head from "./head/main.js"
import content from "./content/main.js"

export default function all(id, pdts){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            margin:7.5vh 0px;
        }`

    const all = cE("div", style)
    all.appendChild(head())
    all.appendChild(content(id, pdts))
    return(all)
}