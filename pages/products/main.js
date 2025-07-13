import head from "./head/main.js"
import section from "./section/main.js"
import all from "./all/main.js"
import foot from "../common/foot/main.js"

export default function products(id){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            background:var(--colorBlack);

            opacity:0;
            transition:opacity 0.5s;
        }`

    const products = cE("div", style)

    let ps = exampleProducts
    ps = [...ps, ...ps, ...ps, ...ps]

    products.appendChild(head())
    products.appendChild(section("Mais vendidos", [ps[0], ps[1], ps[2], ps[3], ps[4], ps[5], ps[6]]))
    products.appendChild(section("Novos produtos", ps.slice(ps.length - 20, ps.length).reverse()))
    products.appendChild(all(id, ps))
    products.appendChild(foot())

    window.addEventListener("load", () => products.style.opacity = 1)
    return(products)
}