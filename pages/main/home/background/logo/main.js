export default function logo(){
    let style = `
        {
            height:50%;
        }
        :responsive{
            height:fit-content;
            width:50%;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/brand/logo.png"
    return(logo)
}