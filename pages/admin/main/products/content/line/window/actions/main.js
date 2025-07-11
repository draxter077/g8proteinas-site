import save from "./save/main.js"
import del from "./del/main.js"

export default function actions(p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            width:100%;
        }`

    const actions = cE("div", style)
    actions.appendChild(save(p))
    actions.appendChild(del(p))
    return(actions)
}