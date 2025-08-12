import window from "./window/main.js"

export default function secondCard(id){
    let style = `
        {
            height:25px;
            filter:invert(1);
            transition:transform 0.5s;
            cursor:pointer;
        }
        :hover{
            transform:scale(1.1);
        }
        :responsive{
            height:20px;
        }`

    const secondCard = cE("img", style)
    secondCard.title = "Emitir segunda via do boleto"
    secondCard.src = "./assets/elements/secondCard.png"

    secondCard.addEventListener(
        "click",
        async function a(){
            await axios.post(apiURL + "/order/post/secondCard", {orderid:id})
                .then(async r => {
                    let w = window("Em breve, você receberá a segunda via do boleto pelo seu e-mail ou telefone")
                    document.getElementById("root").appendChild(w)
                    await new Promise(resolve => setTimeout(resolve, 10))
                    w.style.opacity = 1
                    await new Promise(resolve => setTimeout(resolve, 5000))
                    w.style.opacity = 0
                    await new Promise(resolve => setTimeout(resolve, 550))
                    document.getElementById("root").removeChild(w)
                })
                .catch(async r => {
                    let w = window("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
                    document.getElementById("root").appendChild(w)
                    await new Promise(resolve => setTimeout(resolve, 10))
                    w.style.opacity = 1
                    await new Promise(resolve => setTimeout(resolve, 5000))
                    w.style.opacity = 0
                    await new Promise(resolve => setTimeout(resolve, 550))
                    document.getElementById("root").removeChild(w)
            })
        }
    )
    
    return(secondCard)
}