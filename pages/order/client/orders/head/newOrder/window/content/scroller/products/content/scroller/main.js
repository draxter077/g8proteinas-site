import product from "./product/main.js"

export default function scroller(pdts){
    let style = `
        {
            display:flex;
            flex-direction:column;
            flex-wrap:wrap;
            height:100%;
            width:fit-content;
        }`

    const scroller = cE("div", style)
    for(let i = 0; i < pdts.length; i++){scroller.appendChild(product(pdts[i]))}
    return(scroller)
}