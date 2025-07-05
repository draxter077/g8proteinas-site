export default function repeat(id){
    let style = `
        {
            height:24px;
            filter:invert(1);
            transition:transform 0.5s;
            cursor:pointer;
        }
        :hover{
            transform:rotate(180deg);
        }
        :responsive{
            height:20px;
        }`

    const repeat = cE("img", style)
    repeat.title = "Repetir pedido"
    repeat.src = "./assets/elements/repeat.png"
    return(repeat)
}