import item from "./item/main.js"

export default function box(items, pdts){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            padding:10px 0px;
        }`

    const box = cE("div", style)
    for(let i = 0; i < items.length; i++){box.appendChild(item(items[i], pdts))}
    return(box)
}