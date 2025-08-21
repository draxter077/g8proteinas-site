import value from "./value/main.js"

export default function finance(orders){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:80%;
            margin:2.5vh 0px;
        }
        :responsive{
            width:100%;
        }`

    const finance = cE("div", style)
    let monthYear = "00/00"
    if(orders.length > 0){
        monthYear = orders[orders.length - 1].date.slice(3,10)
    }

    let sales = 0
    for(let i = 0; i < orders.length; i++){
        let o = orders[i]
        let items = o.items
        if(o.date.slice(3,10) == monthYear){
            for(let k = 0; k < items.length; k++){
                sales += items[k].price*items[k].quantity
            }
        }
    }

    finance.appendChild(value(`Faturamento ${monthYear}`, sales))
    return(finance)
}