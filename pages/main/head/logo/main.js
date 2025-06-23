export default function logo(){
    let style = `
        {
            height:80px;
        }
        :responsive{
            height:60px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/brand/logo inverted nb.png"
    return(logo)
}