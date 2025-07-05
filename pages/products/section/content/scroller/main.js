import product from "./product/main.js"

export default function scroller(pdts){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:fit-content;
        }`

    const scroller = cE("div", style)

    for(let i = 0; i < pdts.length; i++){scroller.appendChild(product(pdts[i]))}

    return(scroller)
}