import img from "./img/main.js"
import title from "./title/main.js"
import price from "./price/main.js"
import button from "./button/main.js"

export default function product(p){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
            height:350px;
            aspect-ratio:0.65;
            background:var(--colorWhite);
            margin:7px;
            padding:10px;
            border-radius:10px;
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:scale(1.02);
        }
        :responsive{
            height:33svh;
        }`

    const product = cE("div", style)
    product.appendChild(img("https://png.pngtree.com/png-clipart/20230928/original/pngtree-slice-of-salmon-fillet-png-image_13009822.png"))
    product.appendChild(title("Salmão verde azul lilás branco vindo direto do Chile ou de algum lugar melhor ótimo sabor eu recomendo rsrsrsr muito bom mesmo"))
    product.appendChild(price("R$ 50,00/kg"))
    //product.appendChild(button())
    product.addEventListener(
        "click",
        function a(){
            
        }
    )
    return(product)
}