import logo from "./logo/main.js"
import link from "./link/main.js"

export default function head(){
    let style = `
        {
            position:fixed;
            top:0%;
            left:0%;

            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
            padding:5px;
            z-index:1;
            background:var(--colorBlack);
            box-shadow:0px 0px 3px 0px var(--colorBlue);

            transform:translateY(-100%);
            
            animation:headScroll 1s linear 0s 1 forwards;
            animation-timeline:scroll();
            animation-range-start:0%;
            animation-range-end:50vh;
        }
        @keyframes headScroll{
            0%[transform:translateY(-100%)]
            100%[transform:translateY(0%)]
        }`

    const head = cE("div", style)
    head.appendChild(link("Produtos", "/produtos"))
    head.appendChild(logo())
    head.appendChild(link("Pedidos", "/pedidos"))
    return(head)
}