import item from "./item/main.js"

export default function items(is){
    let style = `
        {
            width:100%;
            height:50%;
            overflow-y:scroll;
        }`

    const items = cE("div", style)
    for(let i = 0; i < is.length; i++){items.appendChild(item(is[i]))}
    return(items)
}