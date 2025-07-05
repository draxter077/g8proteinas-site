export default function items(is){
    let style = `
        {
            width:90%;
            height:40px;
            border-left:1px solid var(--colorOrange);
            max-height:0px;
            transition:max-height 0.5s;
        }`

    const items = cE("div", style)
    return(items)
}