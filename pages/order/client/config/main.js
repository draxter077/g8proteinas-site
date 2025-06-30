import title from "./title/main.js"
import content from "./content/main.js"

export default function config(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:80%;
            background:var(--colorWhite);
            margin:5vh 0px 0px 0px;
            padding:10px 20px;
            border-radius:5px;
        }`

    const config = cE("div", style)
    config.appendChild(title())
    config.appendChild(content())
    return(config)
}