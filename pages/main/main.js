import head from "../common/head/main.js"
import home from "./home/main.js"
import products from "./products/main.js"
import about from "./about/main.js"
import foot from "../common/foot/main.js"

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
    main.appendChild(products())
    main.appendChild(about())
    main.appendChild(foot())
    return(main)
}