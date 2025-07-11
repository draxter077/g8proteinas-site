import img from "./img/main.js"
import title from "./title/main.js"

export default function option(src, url, t){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:18%;
            aspect-ratio:1;
            border-radius:5px;
            transition:background 0.5s;
            cursor:pointer;
        }
        :hover{
            background:var(--colorBlue);
        }
        :responsive{
            width:40%;
        }`

    const option = cE("div", style)
    option.appendChild(img(src))
    option.appendChild(title(t))

    option.addEventListener("click", () => window.open(url, "_blank"))
    return(option)
}