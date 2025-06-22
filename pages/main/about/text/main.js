export default function text(){
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

    const text = cE("div", style)
    text.innerHTML = "Na G8 Proteínas, somos movidos pela missão de oferecer o que há de melhor em nutrição de alta performance. Especializados na distribuição de proteínas de qualidade premium, atuamos com compromisso, transparência e foco na excelência, atendendo desde academias, lojas de suplementos e profissionais da área da saúde até consumidores finais que buscam mais saúde e resultados.<br><br>Fundada com o propósito de democratizar o acesso a suplementos de confiança, trabalhamos com as principais marcas nacionais e importadas, sempre priorizando a pureza dos ingredientes, o rigor nos processos logísticos e o suporte personalizado para cada cliente. Estamos constantemente em busca das melhores soluções para entregar eficiência e desempenho a quem confia em nosso trabalho."
    return(text)
}