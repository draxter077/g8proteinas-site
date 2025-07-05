export default function photo(src){
    let style = `
        {
            height:30vh;
            aspect-ratio:1;
            margin:5px;
        }`

    const photo = cE("img", style)
    photo.src = src
    return(photo)
}