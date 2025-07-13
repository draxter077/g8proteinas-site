import line from "../../../../content/line/main.js"
import window from "./window/main.js"

export default function save(){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            background:var(--colorOrange);
            padding:5px 10px;
            border-radius:5px;
            width:fit-content;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlack);
        }
        :responsive{
            font-size:16px;
        }`

    const save = cE("div", style)
    save.innerHTML = "Salvar"

    save.addEventListener(
        "click",
        function a(e){
            let title = e.target.parentElement.children[2].children[0].children[1]
            let category = e.target.parentElement.children[2].children[1].children[1]
            let unit = e.target.parentElement.children[2].children[2].children[1]
            let price = e.target.parentElement.children[2].children[3].children[1]
            let revenue = e.target.parentElement.children[2].children[4].children[1]
            let supplier = e.target.parentElement.children[2].children[5].children[1]

            async function showWindow(t){
                let w = window(t)
                document.getElementById("root").appendChild(w)
                await new Promise(resolve => setTimeout(resolve, 10))
                w.style.opacity = 1
                await new Promise(resolve => setTimeout(resolve, 5000))
                w.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 550))
                document.getElementById("root").removeChild(w)
            }
            
            if(title.value.length == 0 || category.value.length == 0 || unit.value.length == 0 || price.value.length == 0 || revenue.value.length == 0 || supplier.value.length == 0 || title.value == undefined || category.value == undefined || unit.value == undefined || price.value == undefined || revenue.value == undefined || supplier.value == undefined){
                showWindow("Preencha todos os campos")
            }
            else{
                if(category.value != "Peixes" && category.value != "Frutos do mar" && category.value != "Bovinos" && category.value != "Suínos"){
                    showWindow("A categoria deve ser Peixes, Frutos do mar, Bovinos ou Suínos")
                }
                else if(unit.value != "kg" && unit.value != "unid"){
                    showWindow("A unidade deve ser kg ou unid")
                }
                else{
                    price = Math.round(Number(price.value)*100)/100
                    revenue = Math.round(Number(revenue.value)*100)/100
                    showWindow("Produto salvo pelo ID a76f1")
                    e.target.parentElement.children[0].children[0].click()
                    
                    let p = {
                        id:"a76f1",
                        title:title.value,
                        category:category.value,
                        price:price,
                        revenue:revenue,
                        unit:unit.value,
                        supplier:supplier.value,
                        srcs:[]
                    }
                    document.getElementById("root").children[0].children[0].children[4].children[2].appendChild(line(p))
                }
            }
        }
    )
    return(save)
}