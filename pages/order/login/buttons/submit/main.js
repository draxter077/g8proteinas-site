export default function submit(){
    let style = `
        {
            font-size:20px;
            padding:5px 10px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            border-radius:5px;
        }`

    const submit = cE("div", style)
    submit.innerHTML = "Entrar"
    return(submit)
}