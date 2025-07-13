export default function input(ph){
    let style = `
        {
            width:100%;
            font-size:18px;
            color:var(--colorWhite);
            padding:2px 5px;
            border-bottom:1px solid var(--colorOrange);
            margin:10px 0px;
            transition:border-bottom 0.5s;
        }
        ::placeholder{
            font-style:italic;
        }`

    const input = cE("input", style)
    input.placeholder = ph

    if(ph == "CNPJ"){
        input.addEventListener(
            "input",
            function a(e){
                let v = e.target.value.replaceAll(".","").replaceAll("-","").replaceAll("/","")
                let nS = ""
                for(let i = 0; i < v.length; i++){
                    let c = v[i]
                    nS += c
                    if(i != v.length - 1){
                        if(i == 1 || i == 4){nS += "."}
                        else if(i == 7){nS += "/"}
                        else if(i == 11){nS += "-"}
                    }
                    if(i > 13){break}
                    e.target.value = nS
                }
            }
        )
    }
    else if(ph == "Telefone"){
        input.addEventListener(
            "input",
            function a(e){
                let v = e.target.value.replaceAll("(","").replaceAll(")","").replaceAll("-","").replaceAll(" ","")
                let nS = ""
                for(let i = 0; i < v.length; i++){
                    let c = v[i]
                    if(i == 0){nS += "("}
                    nS += c
                    if(i != v.length - 1){
                        if(i == 2){nS += ") "}
                        else if(i == 7){nS += "-"}
                    }
                    if(i > 11){break}
                    e.target.value = nS
                }
            }
        )
    }
    else if(ph == "Senha"){
        input.type = "password"
    }
    return(input)
}