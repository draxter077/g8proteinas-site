import window from "./window/main.js"

export default function save(p){
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

    const save = cE("button", style)
    save.innerHTML = "Salvar"

    save.addEventListener(
        "click",
        async function a(e){
            e.target.disabled = true

            let title = e.target.parentElement.children[2].children[1].children[1]
            let category = e.target.parentElement.children[2].children[2].children[1]
            let unit = e.target.parentElement.children[2].children[3].children[1]
            let price = e.target.parentElement.children[2].children[4].children[1]
            let observation = e.target.parentElement.children[2].children[5].children[1]

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

            price = Math.round(Number(price.value)*100)/100
            observation = observation.value.replaceAll("\n", "<br>")
            
            if(title.value != p.title || category.value != p.category || unit.value != p.unit || price != p.price || observation != p.observation){                
                if(category.value != "Peixes" && category.value != "Frutos do mar" && category.value != "Bovinos" && category.value != "Suínos"){
                    showWindow("A categoria deve ser Peixes, Frutos do mar, Bovinos ou Suínos")
                }
                else if(unit.value != "kg" && unit.value != "unid"){
                    showWindow("A unidade deve ser kg ou unid")
                }
                else{
                    await axios.post(apiURL + "/supplier/post/changeProductInfo", {id:p.id, title:title.value, category:category.value, unit:unit.value, price:price, observation:observation})
                        .then(r => {
                            showWindow("Alterações salvas. Talvez seja preciso atualizar a página para que as alterações sejam mostradas nessa sessão")
                            e.target.parentElement.children[0].children[0].click()
                        })
                        .catch(r => alert("Algum problema foi encontrado"))
                }
            }

            e.target.disabled = false
        }
    )
    return(save)
}