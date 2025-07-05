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
    photos.appendChild(img("https://viverbem.unimed.coop.br/wp-content/uploads/2017/04/383-beneficios-de-consumir-peixes-regularmente.jpg"))
    photos.appendChild(img("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMuFuZoX4Jb7y_u89RicWeDCti9ffBt3586Q&s"))
    photos.appendChild(img("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysShxcadqC89D-Xe3NFqI-Afh7qCm85h9pA&s"))
    photos.appendChild(img("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR097KjUtrQvc9G7nTq_6kAHoidlmniA2aDPw&s"))
    photos.appendChild(img("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6xrMXQNFoULL9D7SU-TzBQxKTXthdGBK7Mw&s"))
    return(photos)
}