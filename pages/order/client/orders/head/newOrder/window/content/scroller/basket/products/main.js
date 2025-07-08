export default function products(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            flex-wrap:nowrap;
            height:100%;
            width:100%;
            overflow-y:scroll;
        }`

    const products = cE("div", style)
    return(products)
}