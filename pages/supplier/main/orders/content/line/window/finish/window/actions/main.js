import send from "./send/main.js"
import cancel from "./cancel/main.js"

export default function actions(o){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:100%;
        }`

    const actions = cE("div", style)
    actions.appendChild(send(o))
    actions.appendChild(cancel())
    return(actions)
}