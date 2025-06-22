export default function qualities(){
    let style = `
        {
            font-size:25px;
            color:var(--colorWhite);
            width:80%;
            margin:7.5vh 0px 0px 0px;
        }
        :responsive{
            font-size:18px;
            width:90%;
        }`

    const qualities = cE("div", style)
    qualities.innerHTML = "Nossos produtos são cuidadosamente selecionados e fabricados com matérias-primas de alta pureza, garantindo proteínas de excelente qualidade, com alto valor biológico, sabor superior e rigoroso controle de qualidade em cada etapa do processo, garantindo qualidade e segurança para nossos clientes."
    return(qualities)
}