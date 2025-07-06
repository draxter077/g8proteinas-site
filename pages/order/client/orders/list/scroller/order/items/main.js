import box from "./box/main.js"

export default function items(is, pdts){
    let style = `
        {
            width:90%;
            max-height:0px;
            overflow:hidden;
            transition:max-height 0.5s;
        }`

    const items = cE("div", style)
    items.appendChild(box(is, pdts))
    return(items)
}