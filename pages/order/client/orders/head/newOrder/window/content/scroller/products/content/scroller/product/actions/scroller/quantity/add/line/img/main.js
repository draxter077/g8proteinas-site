export default function img(src){
    let style = `
        {
            height:40px;
            border-radius:2px;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}