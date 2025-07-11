import info from "./info/main.js"
import actions from "./actions/main.js"

export default function window(pdts, obs){
    let style = `
        {
            position:fixed;
            top:40%;
            left:25%;

            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
            height:20%;
            width:50%;
            background:var(--colorWhite);
            border-radius:5px;
            border:2px solid var(--colorOrange);
            padding:10px;
            box-shadow:0px 0px 10px 0px var(--colorBlack);
            z-index:6;
            transform:scale(0);
            transition:transform 0.5s;
        }
        :responsive{
            left:5%;
            width:90%;
        }`

    const window = cE("div", style)
    window.appendChild(info(pdts))
    window.appendChild(actions(pdts, obs))
    return(window)
}