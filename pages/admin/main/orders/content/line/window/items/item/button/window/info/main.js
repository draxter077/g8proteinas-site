export default function info(){
    let style = `
        {
            font-size:22px;
            color:var(--colorBlack);
            text-align:center;
        }
        :responsive{
            font-size:17px;
        }`

    const info = cE("div", style)
    info.innerHTML = `Esse produto será confirmado. Essa ação é irreversível.`
    return(info)
}