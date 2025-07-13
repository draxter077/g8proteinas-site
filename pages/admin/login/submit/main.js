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
            let user = e.target.parentElement.children[1].children[0]
            let password = e.target.parentElement.children[1].children[1]
            
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

            if(user.value.length == 0 || password.value.length == 0 || user.value == undefined || password.value == undefined){
                showWindow("Preencha todos os campos")
                inputError(user)
                inputError(password)
            }
            else{
                if(user.value != "keilla"){
                    showWindow("Usuário não encontrado")
                    inputError(user)
                }
                else if(password.value != "1234"){
                    showWindow("Senha incorreta")
                    inputError(password)
                }
                else{
                    construct({page:"admin", data:exampleAdminPage})
                }
                // showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
            }
        }
    )
    return(submit)
}