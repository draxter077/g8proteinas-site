import head from "./head/main.js"
import photos from "./photos/main.js"
import title from "./title/main.js"
import observation from "./observation/main.js"
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
            padding:0px 0px 20px 0px;
            overflow:hidden;
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
    window.appendChild(observation(p.observation))
    window.appendChild(button())
    return(window)
}