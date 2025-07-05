import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            width:10%;
        }
        :responsive{
            width:40%;
        }`

    const links = cE("div", style)
    links.appendChild(link("./assets/elements/whatsapp.png", ""))
    links.appendChild(link("./assets/elements/instagram.png", ""))
    links.appendChild(link("./assets/elements/mail.png", ""))
    return(links)
}