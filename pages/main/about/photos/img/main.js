export default function img(src){
    let style = `
        {
            width:18%;
            aspect-ratio:1;
            border-radius:10px;
            background:white;
        }
        :responsive{
            width:49%;
            margin:5px 1px;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}