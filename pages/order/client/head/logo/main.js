export default function logo(){
    let style = `
        {
            height:70px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/brand/logo inverted.png"
    return(logo)
}