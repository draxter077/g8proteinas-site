import input from "../input/main.js"

export default function signup(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
        }`

    const signup = cE("div", style)
    signup.appendChild(input("Nome da empresa"))
    signup.appendChild(input("Nome do responsável"))
    signup.appendChild(input("Email"))
    signup.appendChild(input("Telefone"))
    return(signup)
}