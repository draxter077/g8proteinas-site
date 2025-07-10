import logo from "./logo/main.js"
import cnpj from "./cnpj/main.js"
import links from "./links/main.js"

export default function brand(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            flex-wrap:wrap;
            width:90%;
        }`

    const brand = cE("div", style)
    brand.appendChild(logo())
    //brand.appendChild(cnpj())
    brand.appendChild(links())
    return(brand)
}