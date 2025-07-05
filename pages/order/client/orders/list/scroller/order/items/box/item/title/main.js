export default function title(t, q, p){
    let style = `
        {
            text-align:center;
            width:80%;
        }
        :responsive{
            margin:10px 0px;
        }
        >span{
            margin:0px 7px;
            color:var(--colorBlue);
        }`

    const title = cE("div", style)
    title.innerHTML = `${q}kg de ${t}<span>•</span>${stringifyNumber(Number(p.split("/")[0].replaceAll(",","."))*q)}`
    return(title)
}