import head from "./head/main.js"
import section from "./section/main.js"
import foot from "../common/foot/main.js"

export default function products(id){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            background:var(--colorBlack);
        }`

    const products = cE("div", style)
    alert(id)
    products.appendChild(head())
    products.appendChild(section("Mais vendidos", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))
    products.appendChild(section("Novos produtos", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))
    products.appendChild(foot())
    return(products)
}