import img from "./img/main.js"
import title from "./title/main.js"

export default function category(src, t){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:24%;
        }
        :responsive{
            width:48%;
            margin:0px 0px 20px 0px;
        }`

    const category = cE("div", style)
    category.appendChild(img(src))
    category.appendChild(title(t))
    return(category)
}