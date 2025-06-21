import background from "./background/main.js"
import arrow from "./arrow/main.js"

export default function home(){
    let style = `
        {
            position:relative;
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100vh;
        }`

    const home = cE("div", style)
    home.appendChild(background())
    home.appendChild(arrow())
    return(home)
}