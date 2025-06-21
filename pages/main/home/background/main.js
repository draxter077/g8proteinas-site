import logo from "./logo/main.js"
import slogan from "./slogan/main.js"

export default function background(){
    let style = `
        {
            position:fixed;
            top:0%;
            left:0%;
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100%;
            background:var(--colorOrange);
            z-index:-1;

            animation:backgroundScroll 1s linear 0s 1 forwards;
            animation-timeline:scroll();
            animation-range-start:0%;
            animation-range-end:100vh;
        }
        @keyframes backgroundScroll{
            0%[opacity:1;transform:scale(1)]
            100%[opacity:0.5;transform:scale(0.9)]
        }
        :responsive{
            flex-direction:column;
        }`

    const background = cE("div", style)
    background.appendChild(logo())
    background.appendChild(slogan())
    return(background)
}