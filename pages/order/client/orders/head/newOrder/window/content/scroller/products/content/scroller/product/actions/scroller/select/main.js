import button from "./button/main.js"

export default function select(){
    let style = `
        {
            width:50%;
        }`

    const select = cE("div", style)
    select.appendChild(button())
    return(select)
}