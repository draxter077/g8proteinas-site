export default function slogan(){
    let style = `
        {
            font-size:35px;
            color:var(--colorWhite);
            text-align:center;
            width:60%;
            opacity:0;
            transition:opacity 0.5s;
        }
        :responsive{
            font-size:19px;
            width:90%;
        }`

    const slogan = cE("div", style)
    slogan.innerHTML = "Os melhores produtos para peixarias, restaurantes, churrascarias, hotéis e atacados" 
    
    window.addEventListener("load", async () => {await new Promise(resolve => setTimeout(resolve, 1000)); slogan.style.opacity = 1})
    return(slogan)
}