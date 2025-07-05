export default function img(src){
    let style = `
        {
            width:30%;
            filter:invert(1);
            margin:0px 0px 20px 0px;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}