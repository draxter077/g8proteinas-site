export default function float(f){
    let style = `
        {
            font-size:22px;
            color:var(--colorBlack);
            margin:2px 0px 0px 0px;
        }
        :responsive{
            font-size:18px;
        }`

    const float = cE("div", style)
    float.innerHTML = f
    return(float)
}