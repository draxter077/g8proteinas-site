export default function img(){
    let style = `
        {
            height:40px;
            border-radius:5px;
            margin:0px 0px 0px 10px;
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:scale(1.1);
        }`

    const img = cE("img", style)
    img.src = "https://www.ph.net.br/assets/logo.jpg"
    img.addEventListener("click", () => window.open("https://www.ph.net.br", "_blank"))
    return(img)
}