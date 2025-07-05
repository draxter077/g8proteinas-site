export default function newOrder(id, products){
    let style = `
        {
            font-size:20px;
            padding:5px 10px;
            margin:0px 0px 0px 30px;
            border-radius:5px;
            background:var(--colorWhite);
            color:var(--colorBlack);
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            background:var(--colorOrange);
            color:var(--colorWhite);
        }
        :responsive{
            font-size:17px;
            margin:0px;
        }`

    const newOrder = cE("div", style)
    newOrder.innerHTML = "Novo pedido"
    return(newOrder)
}