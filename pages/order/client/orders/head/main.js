import search from "./search/main.js"
import newOrder from "./newOrder/main.js"

export default function head(products){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:80%;
            margin:0px 0px 10px 0px;
        }
        :responsive{
            flex-direction:column;
            width:90%;
        }`

    const head = cE("div", style)
    //head.appendChild(search())
    head.appendChild(newOrder(products))
    return(head)
}