import head from "./head/main.js"
import photos from "./photos/main.js"
import title from "./title/main.js"
import price from "./price/main.js"
import button from "./button/main.js"

export default function window(t, src, p){
    let style = `
        {
            position:fixed;
            top:10%;
            left:10%;

            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:80%;
            height:80%;
            background:var(--colorWhite);
            border-radius:5px;
            padding:20px;
            box-shadow:0px 0px 5px 0px var(--colorBlue);
        }`

    const window = cE("div", style)
    window.appendChild(head())
    window.appendChild(photos())
    window.appendChild(title())
    window.appendChild(price())
    window.appendChild(button())
    return(window)
}