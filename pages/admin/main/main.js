import head from "./head/main.js"
import config from "./config/main.js"
import finance from "./finance/main.js"
import orders from "./orders/main.js"
import products from "./products/main.js"
import clients from "./clients/main.js"
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

    let ords = []
    for(let i = 0; i < log.users.length; i++){
        let os = log.users[i].orders
        for(let o = 0; o < os.length; o++){
            os[o].clientid = log.users[i].id
            os[o].clientname = log.users[i].businessName
            ords.push(os[o])
        }
    }

    console.log(log)
    client.appendChild(head())
    client.appendChild(config(log.user))
    client.appendChild(finance(ords))
    client.appendChild(orders(ords))
    client.appendChild(products(log.products))
    client.appendChild(clients(log.users))
    client.appendChild(foot())
    return(client)
}