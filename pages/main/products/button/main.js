export default function button(){
    let style = `
        {
            font-size:23px;
            font-weight:900;
            padding:10px 15px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            border-radius:10px;
            margin:7.5vh 0px 0px 0px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorOrange);
        }
        :responsive{
            font-size:16px;
        }`

    const button = cE("a", style)
    button.href = "https://www.g8proteinas.com.br/produtos"
    button.target = "_self"
    button.innerHTML = "Conheça todos os nossos produtos"
    return(button)
}