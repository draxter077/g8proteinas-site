import product from "../../../section/content/scroller/product/main.js"

export default function scroller(id, pdts){
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

    window.addEventListener(
        "load",
        function a(){
            if(id != undefined){
                for(let i = 0; i < scroller.children.length; i++){
                    let p = scroller.children[i]
                    if(p.id == id){p.click();break}
                }
            }
        }
    )

    return(scroller)
}