export default function img(src){
    let style = `
        {
            width:30%;
            aspect-ratio:1;
            filter:invert(1);
        }
        :responsive{
            margin:0px 0px 5px 0px;
            width:50%;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}