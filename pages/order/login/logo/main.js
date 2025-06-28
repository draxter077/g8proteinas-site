export default function logo(){
    let style = `   
        {
            height:150px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/brand/logoname inverted.png"
    return(logo)
}