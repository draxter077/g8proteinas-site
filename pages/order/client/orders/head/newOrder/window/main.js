import head from "./head/main.js"
import change from "./change/main.js"
import content from "./content/main.js"

export default function window(pdts, order){
    let style = `
        {
            position:fixed;
            top:2.5%;
            left:2.5%;

            display:flex;
            flex-direction:column;
            align-items:center;
            width:95%;
            height:95%;
            padding:10px;
            background:var(--colorWhite);
            border-radius:5px;
            box-shadow:0px 0px 500px 0px var(--colorBlack);
            transform:scale(0);
            transition:transform 0.5s;
            z-index:3;
        }`

    const window = cE("div", style)
    window.appendChild(head())
    window.appendChild(change())
    window.appendChild(content(pdts, order))
    return(window)
}