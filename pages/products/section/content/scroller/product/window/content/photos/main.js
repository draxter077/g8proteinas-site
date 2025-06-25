import scroller from "./scroller/main.js"

export default function photos(){
    let style = `
        {
            width:100%;
            overflow-x:scroll;
        }`

    const photos = cE("div", style)
    photos.appendChild(scroller())
    return(photos)
}