import option from "./option/main.js"

export default function options(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            flex-wrap:wrap;
            width:100%;
        }`

    const options = cE("div", style)
    options.appendChild(option("./assets/elements/whatsapp.png", "https://wa.me/4188165618", "(41) 98816-5618"))
    options.appendChild(option("./assets/elements/instagram.png", "https://instagram.com/g8proteinas", "@g8proteinas"))
    options.appendChild(option("./assets/elements/mail.png", "mailto:contato@g8proteinas.com.br", "contato@<br>g8proteinas.com.br"))
    return(options)
}