export default function unit(){
    let style = `
        {
            font-size:12px;
            color:var(--colorBlue);
        }`

    const unit = cE("div", style)
    unit.innerHTML = "kg"
    return(unit)
}