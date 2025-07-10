import value from "./value/main.js"

export default function finance(orders){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:80%;
            margin:0px 0px 2.5vh 0px;
        }
        :responsive{
            width:100%;
        }`

    const finance = cE("div", style)
    let sales = 0, revenue = 0
    for(let i = 0; i < orders.length; i++){
        let o = orders[i]
        let items = o.items
        for(let k = 0; k < items.length; k++){
            sales += items[k].price*items[k].quantity
            revenue += items[k].price*items[k].quantity // Mudar para margem
        }
    }

    finance.appendChild(value("Faturamento", sales))
    finance.appendChild(value("Lucro", revenue))
    return(finance)
}