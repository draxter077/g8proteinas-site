export default function change(){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
        }`

    const change = cE("div", style)
    change.innerHTML = "Criar conta"
    return(change)
}