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
    submit.addEventListener(
        "click",
        () => construct({page:"order", data:{id:123}})
    )
    return(submit)
}