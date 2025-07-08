import head from "./head/main.js"
import photos from "./photos/main.js"
import title from "./title/main.js"
import price from "./price/main.js"
import button from "./button/main.js"

export default function window(p){
    let style = `
        {
            position:fixed;
            top:10%;
            left:10%;
            z-index:2;

            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:80%;
            height:80%;
            background:var(--colorWhite);
            border-radius:5px;
            padding:20px;
            box-shadow:0px 0px 500px 0px var(--colorBlack);

            transform:translateX(-200%);
            transition:transform 0.5s;
        }
        :responsive{
            top:2.5%;
            left:2.5%;

            width:95%;
            height:95%;
        }`

    const window = cE("div", style)
    window.appendChild(head())
    window.appendChild(photos(p.srcs))
    window.appendChild(title(p.title))
    window.appendChild(price(p.price, p.unit))
    window.appendChild(button())
    return(window)
}