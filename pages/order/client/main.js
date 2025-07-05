import head from "./head/main.js"
import config from "./config/main.js"
import orders from "./orders/main.js"
import foot from "../../common/foot/main.js"

export default function client(log){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const client = cE("div", style)
    client.appendChild(head())
    client.appendChild(config(log.user))
    client.appendChild(orders(log))
    client.appendChild(foot())
    return(client)
}