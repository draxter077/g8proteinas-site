export default function img(src){
    let style = `
        {
            width:80%;
            aspect-ratio:1;
            border-radius:5px;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}