export default function img(src){
    let style = `
        {
            height:60px;
            aspect-ratio:1;
            border-radius:5px;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}