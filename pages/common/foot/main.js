import brand from "./brand/main.js"
import ph from "./ph/main.js"

export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            background:var(--colorOrange);
            box-shadow:0px 0px 5px 0px var(--colorOrange);
        }`

    const foot = cE("div", style)
    foot.appendChild(brand())
    foot.appendChild(ph())
    return(foot)
}