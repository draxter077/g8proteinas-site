import img from "./img/main.js"
import title from "./title/main.js"
import total from "./total/main.js"
import cancel from "./cancel/main.js"

export default function line(id, src, t, q, p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:100%;
            font-size:20px;
            padding:5px 10px;
            margin:1px 0px;
            border:1px solid var(--colorBlue);
            border-radius:5px;
            color:black;
        }`

    const line = cE("div", style)
    line.id = id
    line.appendChild(img(src))
    line.appendChild(title(t, q))
    line.appendChild(total(q, p))
    line.appendChild(cancel())
    return(line)
}