import textarea from "./textarea/main.js"
import send from "./send/main.js"

export default function actions(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
            padding:5px 10px;
            border-radius:0px 0px 5px 5px;
            background:var(--colorOrange);
        }`

    const actions = cE("div", style)
    actions.appendChild(textarea())
    actions.appendChild(send())
    return(actions)
}