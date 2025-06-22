import photos from "./photos/main.js"
import text from "./text/main.js"

export default function about(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            background:var(--colorBlack);
            padding:10vh 0px 5vh 0px;
        }`

    const about = cE("div", style)
    about.appendChild(photos())
    about.appendChild(text())
    return(about)
}