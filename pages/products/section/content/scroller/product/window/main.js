import head from "./head/main.js"
import content from "./content/main.js"

export default function window(t, src, p){
    let style = `
        {
            position:fixed;
            top:10%;
            left:10%;

            display:flex;
            flex-direction:column;
            align-items:center;
            width:80%;
            height:80%;
            background:var(--colorWhite);
            border-radius:5px;
            padding:20px;
            box-shadow:0px 0px 5px 0px var(--colorBlue);
        }`

    const window = cE("div", style)
    window.appendChild(head())
    window.appendChild(content())
    return(window)
}