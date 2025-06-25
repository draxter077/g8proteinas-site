export default function photo(){
    let style = `
        {
            height:30vh;
            aspect-ratio:1;
            margin:5px;
        }`

    const photo = cE("img", style)
    photo.src = "https://png.pngtree.com/png-clipart/20230928/original/pngtree-slice-of-salmon-fillet-png-image_13009822.png"
    return(photo)
}