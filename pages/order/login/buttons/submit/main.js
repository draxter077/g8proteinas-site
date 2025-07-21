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

    const submit = cE("button", style)
    submit.innerHTML = "Entrar"
    submit.addEventListener(
        "click",
        async function a(e){
            e.target.disabled = true

            let signupDiv = e.target.parentElement.parentElement.children[1].children[0].children[0]
            let businessName = signupDiv.children[0]
            let email = signupDiv.children[1]
            let phoneNumber = signupDiv.children[2]
            let address = signupDiv.children[3]
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
                    if(password.value == "esqueciminhasenha"){
                        await axios.post(apiURL + "/order/post/userForgotPassword", {cnpj:cnpj.value})
                            .then(r => {showWindow("Uma senha temporária foi enviada para o email vinculado ao seu CNPJ")})
                            .catch(r => {
                                if(r.response.status == 404){
                                    showWindow("CNPJ não encontrado")
                                    inputError(cnpj)
                                }
                                else{
                                    showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
                                }
                            })
                    }
                    else{
                        await axios.post(apiURL + "/order/post/userLog", {cnpj:cnpj.value, password:password.value})
                            .then(r => {construct({page:"order", data:r.data})})
                            .catch(r => {
                                if(r.response.status == 404){
                                    showWindow("CNPJ não encontrado")
                                    inputError(cnpj)
                                }
                                else if(r.response.status == 403){
                                    showWindow("Senha incorreta. Digite 'esqueciminhasenha' no campo senha para receber uma temporária pelo email vinculado ao seu CNPJ")
                                    inputError(password)
                                }
                                else{
                                    showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
                                }
                            })
                    }
                }
            }
            else{
                if(businessName.value.length == 0 || email.value.length == 0 || phoneNumber.value.length == 0 || address.value.length == 0 || cnpj.value.length == 0 || password.value.length == 0 || businessName.value == undefined || email.value == undefined || phoneNumber.value == undefined || address.value == undefined || cnpj.value == undefined || password.value == undefined){
                    showWindow("Preencha todos os campos")
                    inputError(businessName)
                    inputError(email)
                    inputError(phoneNumber)
                    inputError(address)
                    inputError(cnpj)
                    inputError(password)
                }
                else{
                    await axios.post(apiURL + "/order/post/userCreation", {cnpj:cnpj.value, businessname:businessName.value, email:email.value, phonenumber:phoneNumber.value, address:address.value, password:password.value})
                        .then(r => {construct({page:"order", data:r.data})})
                        .catch(r => {
                            if(r.response.status == 409){
                                showWindow("CNPJ já vinculado a uma conta")
                                inputError(cnpj)
                            }
                            else{
                                showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
                            }
                        })
                }
            }

            e.target.disabled = false
        }
    )
    return(submit)
}