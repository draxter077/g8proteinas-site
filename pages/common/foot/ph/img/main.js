export default function img(){
    let style = `
        {
            height:25px;
            border-radius:5px;
            margin:0px 0px 0px 5px;
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:scale(1.1);
        }
        :responsive{
            height:20px;
        }`

    const img = cE("img", style)
    img.src = "https://www.ph.net.br/assets/logo.jpg"
    img.addEventListener("click", () => window.open("https://www.ph.net.br", "_blank"))
    return(img)
}