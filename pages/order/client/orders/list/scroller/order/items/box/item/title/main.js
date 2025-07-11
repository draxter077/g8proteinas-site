export default function title(t, q, p){
    let style = `
        {
            text-align:left;
            font-size:15px;
            width:80%;
            margin:5px;
        }
        :responsive{
            font-size:12px;
            text-align:center;
        }
        >span{
            margin:0px 7px;
            color:var(--colorBlue);
        }`

    const title = cE("div", style)
    title.innerHTML = `${q}kg de ${t.split(" - ")[0]}<span>•</span>${stringifyNumber(p*q)}`
    return(title)
}