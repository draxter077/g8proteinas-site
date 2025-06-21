export default function productsCategories(){
    let style = `
        {
            width:100%;
            height:150vh;
            background:var(--colorBlack);
            box-shadow:0px 0px 5px 0px var(--colorBlack);
        }`

    const productsCategories = cE("div", style)
    return(productsCategories)
}