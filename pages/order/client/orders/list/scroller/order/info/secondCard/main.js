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
    secondCard.src = "./assets/elements/secondCard.png"
    return(secondCard)
}