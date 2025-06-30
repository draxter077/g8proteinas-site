import head from "./head/main.js"
import config from "./config/main.js"

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
    client.appendChild(config())
    return(client)
}