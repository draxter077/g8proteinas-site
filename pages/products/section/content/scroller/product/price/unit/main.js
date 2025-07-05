export default function unit(u){
    let style = `
        {
            font-size:15px;
            color:var(--colorBlue);
            margin:14px 0px 0px 0px;
        }
        :responsive{
            font-size:12px;
            margin:10px 0px 0px 0px;
        }`

    const unit = cE("div", style)
    unit.innerHTML = "/" + u
    return(unit)
}