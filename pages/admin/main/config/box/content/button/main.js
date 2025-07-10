export default function button(){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            background:var(--colorBlue);
            padding:5px 10px;
            border-radius:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorOrange);
        }
        :responsive{
            font-size:15px;
        }`

    const button = cE("div", style)
    button.innerHTML = "Salvar"

    button.addEventListener(
        "click",
        function a(e){
            let cnpj = e.target.parentElement.children[0].children[0].children[1].value
            let businessName = e.target.parentElement.children[0].children[1].children[1].value
            let responsibleName = e.target.parentElement.children[0].children[2].children[1].value
            let email = e.target.parentElement.children[0].children[3].children[1].value
            let phoneNumber = e.target.parentElement.children[0].children[4].children[1].value
            let password = e.target.parentElement.children[0].children[5].children[1].value

            alert(`${cnpj}, ${businessName}, ${responsibleName}, ${email}, ${phoneNumber} e ${password}`)
        }
    )
    return(button)
}