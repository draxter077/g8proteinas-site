export default function logo(){
    let style = `
        {
            height:100px;
        }
        :responsive{
            width:50%;
            height:fit-content;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/brand/logoname horizontal.png"
    return(logo)
}