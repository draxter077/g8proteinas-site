import box from "./box/main.js"

export default function items(is, pdts){
    let style = `
        {
            width:90%;
            border-left:1px solid var(--colorOrange);
            border-right:1px solid var(--colorOrange);
            max-height:0px;
            overflow:hidden;
            transition:max-height 0.5s;
        }`

    const items = cE("div", style)
    items.appendChild(box(is, pdts))
    return(items)
}