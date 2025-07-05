export default function repeat(id){
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

    const repeat = cE("img", style)
    repeat.src = "./assets/elements/repeat.png"
    return(repeat)
}