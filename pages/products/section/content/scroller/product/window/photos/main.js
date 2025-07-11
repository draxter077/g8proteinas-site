import scroller from "./scroller/main.js"

export default function photos(srcs){
    let style = `
        {
            width:95%;
            overflow-x:scroll;
        }`

    const photos = cE("div", style)
    photos.appendChild(scroller(srcs))
    return(photos)
}