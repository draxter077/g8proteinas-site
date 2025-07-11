export default function img(src){
    let style = `
        {
            width:18%;
            aspect-ratio:1;
            border-radius:10px;
            box-shadow:0px 0px 2px 0px var(--colorBlue);
        }
        :responsive{
            width:40%;
            margin:5px;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}