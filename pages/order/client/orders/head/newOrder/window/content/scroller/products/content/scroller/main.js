import product from "./product/main.js"

export default function scroller(pdts){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            width:100%;
        }`

    const scroller = cE("div", style)
    for(let i = 0; i < pdts.length; i++){
        if(pdts[i].stock > 0){scroller.appendChild(product(pdts[i]))}
    }
    return(scroller)
}