export default function submit(){
    let style = `
        {
            font-size:20px;
            padding:5px 10px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            border-radius:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorOrange);
        }`

    const submit = cE("div", style)
    submit.innerHTML = "Entrar"
    submit.addEventListener(
        "click",
        function a(e){
            let signupDiv = e.target.parentElement.parentElement.children[1].children[0].children[0]
            let businessName = signupDiv.children[0].value
            let responsibleName = signupDiv.children[1].value
            let email = signupDiv.children[2].value
            let phoneNumber = signupDiv.children[3].value
            let cnpj = e.target.parentElement.parentElement.children[1].children[1].value
            let password = e.target.parentElement.parentElement.children[1].children[2].value
            
            if(e.target.innerHTML == "Entrar"){
                alert(`Entrando com ${cnpj} e ${password}`)
            }
            else{
                alert(`Criando ${businessName}, ${responsibleName}, ${email}, ${phoneNumber}, ${cnpj} e ${password}`)
            }
            construct({page:"order", data:{id:123}})
        }
    )
    return(submit)
}