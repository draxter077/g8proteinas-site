export default function search(){
    let style = `
        {
            font-size:20px;
            width:100%;
            height:fit-content;
            padding:5px 10px;
            border-bottom:1px solid var(--colorBlue);
            color:var(--colorWhite);
        }
        ::placeholder{
            font-style:italic;
            color:var(--colorWhite);
        }`

    const search = cE("input", style)
    search.placeholder = "Pesquise em todos os produtos..."

    search.addEventListener(
        "input",
        function a(e){
            let products = e.target.parentElement.parentElement.children[1].children[0].children
            let term = e.target.value
            for(let i = 0; i < products.length; i++){
                let title = products[i].children[1].innerHTML
                if(!title.includes(term)){
                    products[i].style.display = "none"
                }
                else{
                    products[i].style.display = "flex"
                }
            }
        }
    )

    return(search)
}