export default function finish(o){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            background:var(--colorOrange);
            padding:5px 10px;
            border-radius:5px;
            width:fit-content;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlack);
        }
        :responsive{
            font-size:16px;
        }`

    const finish = cE("div", style)
    finish.innerHTML = "Concluir pedido"

    finish.addEventListener("click", () => console.log(o))
    return(finish)
}