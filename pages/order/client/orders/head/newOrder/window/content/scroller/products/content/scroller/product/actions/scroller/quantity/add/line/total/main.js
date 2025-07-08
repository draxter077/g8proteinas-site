export default function total(q, p){
    let style = `
        {
            font-size:14px;
            color:var(--colorOrange);
        }`

    const total = cE("div", style)
    total.innerHTML = `${stringifyNumber(q*p)} (${stringifyNumber(p)}/kg)`
    return(total)
}