export default function unit(u){
    let style = `
        {
            font-size:12px;
            color:var(--colorBlue);
        }`

    const unit = cE("div", style)
    unit.innerHTML = u
    return(unit)
}