export default function info(pdts){
    let style = `
        {
            font-size:22px;
            color:var(--colorBlack);
            text-align:center;
        }
        :responsive{
            font-size:17px;
        }`

    const info = cE("div", style)
    let total = 0
    for(let i = 0; i < pdts.length; i++){
        let p = pdts[i]
        total += Number(p.price)*p.quantity
    }
    info.innerHTML = `Seu pedido de ${pdts.length} ${pdts.length > 1 ? "itens" : "item"}, totalizando ${stringifyNumber(total)}, será enviado`
    return(info)
}