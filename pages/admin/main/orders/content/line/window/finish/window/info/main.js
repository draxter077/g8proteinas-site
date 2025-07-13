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
    info.innerHTML = `Esse pedido será alterado para "Concluído". Essa ação é irreversível.`
    return(info)
}