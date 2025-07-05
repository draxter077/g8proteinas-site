export default function logo(){
    let style = `
        {
            height:80px;
            cursor:pointer;
        }
        :responsive{
            height:60px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/brand/logo inverted nb.png"
    logo.addEventListener("click", () => window.open("/", "_self"))
    return(logo)
}