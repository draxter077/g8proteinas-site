import scroller from "./scroller/main.js"

export default function actions(u){
    let style = `
        {
            width:100%;
            overflow:hidden;
        }`

    const actions = cE("div", style)
    actions.appendChild(scroller(u))
    return(actions)
}