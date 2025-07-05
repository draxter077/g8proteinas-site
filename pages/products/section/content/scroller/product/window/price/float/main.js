export default function float(f){
    let style = `
        {
            font-size:22px;
            color:var(--colorBlack);
            margin:4px 0px 0px 5px;
        }
        :responsive{
            font-size:18px;
            margin:2px 0px 0px 0px;
        }`

    const float = cE("div", style)
    float.innerHTML = f
    return(float)
}