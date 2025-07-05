export default function float(f){
    let style = `
        {
            font-size:22px;
            color:var(--colorBlack);
            margin:4px 0px 0px 5px;
        }
        :responsive{
            font-size:18px;
        }`

    const float = cE("div", style)
    float.innerHTML = f
    return(float)
}