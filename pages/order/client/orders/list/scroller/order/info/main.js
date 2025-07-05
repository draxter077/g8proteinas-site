import showMore from "./showMore/main.js"
import title from "./title/main.js"
import status from "./status/main.js"
import secondCard from "./secondCard/main.js"
import repeat from "./repeat/main.js"

export default function info(o){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            flex-wrap:wrap;
            width:100%;
            font-size:18px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:14px;
        }`

    const info = cE("div", style)
    info.appendChild(showMore())
    info.appendChild(title(o.id, o.date, o.hour, o.items))
    info.appendChild(status(o.status))
    info.appendChild(secondCard(o.id))
    info.appendChild(repeat(o.id))
    return(info)
}