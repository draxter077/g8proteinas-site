import img from "./img/main.js"

export default function photos(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:80%;
        }
        :responsive{
            width:90%;
            justify-content:center;
        }`

    const photos = cE("div", style)
    photos.appendChild(img())
    photos.appendChild(img())
    photos.appendChild(img())
    photos.appendChild(img())
    photos.appendChild(img())
    return(photos)
}