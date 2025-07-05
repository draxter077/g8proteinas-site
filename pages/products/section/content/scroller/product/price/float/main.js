export default function float(f){
    let style = `
        {
            font-size:18px;
            color:var(--colorBlack);
            margin:2px 0px 0px 0px;
        }
        :responsive{
            font-size:12px;
            margin:2px 0px 0px 0px;
        }`

    const float = cE("div", style)
    float.innerHTML = f
    return(float)
}