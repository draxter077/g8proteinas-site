import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            width:15%;
        }
        :responsive{
            width:40%;
        }`

    const links = cE("div", style)
    links.appendChild(link("./assets/elements/whatsapp.png", "https://wa.me/4188165618"))
    links.appendChild(link("./assets/elements/instagram.png", "https://www.instagram.com/g8proteinas"))
    links.appendChild(link("./assets/elements/mail.png", "mailto:contato@g8proteinas.com.br"))
    return(links)
}