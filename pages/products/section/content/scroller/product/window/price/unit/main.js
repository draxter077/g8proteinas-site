export default function unit(u){
    let style = `
        {
            font-size:20px;
            color:var(--colorBlue);
            margin:16px 0px 0px 0px;
        }
        :responsive{
            font-size:17px;
            margin:14px 0px 0px 0px;
        }`

    const unit = cE("div", style)
    unit.innerHTML = "/" + u
    return(unit)
}