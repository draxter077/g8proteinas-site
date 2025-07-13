import window from "./window/main.js"

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
            let businessName = signupDiv.children[0]
            let email = signupDiv.children[1]
            let phoneNumber = signupDiv.children[2]
            let cnpj = e.target.parentElement.parentElement.children[1].children[1]
            let password = e.target.parentElement.parentElement.children[1].children[2]

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

            async function inputError(ipt){
                ipt.style.borderBottom = "1px solid red"
                await new Promise(resolve => setTimeout(resolve, 550))
                ipt.style.borderBottom = "1px solid var(--colorOrange)"
            }
            
            if(e.target.innerHTML == "Entrar"){
                if(cnpj.value.length == 0 || password.value.length == 0 || cnpj.value == undefined || password.value == undefined){
                    showWindow("Preencha todos os campos")
                    inputError(cnpj)
                    inputError(password)
                }
                else{
                    if(cnpj.value != "12.345.678/0001-00"){
                        showWindow("CNPJ não encontrado")
                        inputError(cnpj)
                    }
                    else if(password.value == "esqueciminhasenha"){
                        showWindow("Uma senha temporária foi enviada para o email vinculado ao seu CNPJ")
                    }
                    else if(password.value != "1234"){
                        showWindow("Senha incorreta. Digite 'esqueciminhasenha' no campo senha para receber uma temporária pelo email vinculado ao seu CNPJ")
                        inputError(password)
                    }
                    else{
                        construct({page:"order", data:exampleOrderPage})
                    }
                    // showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
                }
            }
            else{
                if(businessName.value.length == 0 || email.value.length == 0 || phoneNumber.value.length == 0 || cnpj.value.length == 0 || password.value.length == 0 || businessName.value == undefined || email.value == undefined || phoneNumber.value == undefined || cnpj.value == undefined || password.value == undefined){
                    showWindow("Preencha todos os campos")
                    inputError(businessName)
                    inputError(email)
                    inputError(phoneNumber)
                    inputError(cnpj)
                    inputError(password)
                }
                else{
                    if(cnpj.value != "12.345.678/0001-00"){
                        showWindow("CNPJ já vinculado a uma conta")
                        inputError(cnpj)
                    }
                    else{
                        construct({page:"order", data:exampleOrderPage})
                    }
                    // showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
                }
            }
        }
    )
    return(submit)
}