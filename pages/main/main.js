import head from "./head/main.js"
import home from "./home/main.js"
import productsCategories from "./productsCategories/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(home())
    main.appendChild(productsCategories())
    return(main)
}