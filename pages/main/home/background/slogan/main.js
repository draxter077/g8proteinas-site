export default function slogan(){
    let style = `
        {
            font-size:35px;
            color:var(--colorWhite);
            text-align:center;
            width:60%;
        }
        >span{
            position:relative;
            padding:0px 5px;
        }
        >span::after{
            position:absolute;
            top:0%;
            left:0%;

            content:"";
            background:var(--colorBlue);
            height:100%;
            width:0%;
            border-radius:5px;
            animation:widtherSpanSlogan 1s linear 0s 1 forwards;
            z-index:-1;
        }
        @keyframes widtherSpanSlogan{
            0%[width:0%;]
            100%[width:100%;]
        }
        :responsive{
            font-size:19px;
            width:90%;
        }`

    const slogan = cE("div", style)
    slogan.innerHTML = "Com <span>atendimento exclusivo e garantia de qualidade,</span>fornecemos os melhores produtos para peixarias, restaurantes, churrascarias, hotéis e resorts ou atacados."
    return(slogan)
}