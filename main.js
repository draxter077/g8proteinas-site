import main from "./pages/main/main.js"
import products from "./pages/products/main.js"
import order from "./pages/order/main.js"
import admin from "./pages/admin/main.js"

window.cE = function cE(t, stl){
    function addClass(){
        function randomName(names){
            const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
                            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
            let name = ""
            while(true){
                for(let k = 0; k < 5; k++){
                    let n = Math.floor((chars.length)*Math.random())
                    name += chars[n]
                }
                for(let l = 0; l < names.length; l++){
                    if(name == names[l]){
                        name = ""
                        break
                    }
                }
                if(name != ""){
                    break
                }
            }
            return(name)
        }

        // Formata os styles já adicionados à tag style
        let stylesTag = document.getElementsByTagName("style")[0].innerHTML
        let styles = stylesTag
                        .replaceAll("\n", "")
                        .replaceAll("  ", "")
                        .split("}") // Retorna array com elementos do tipo .nome{atr: value,...
        // Formata o style do argumento
        let stylesGotten = stl.split("}") // Retorna array com elementos do tipo {atr: value,...
        stl = stylesGotten[0] + "}" // O primeiro estilo tem a chave fechada
        let style = stylesGotten[0]
                        .replaceAll("\n", "")
                        .replaceAll("  ", "")
                        .replace("{", "")
                        .replace("}", "")
                        .split(";") // Retorna uma array com elementos 'atr: value', ....
        // Cria e popula arrays relevantes
        let stylesNames = []
        let stylesNamesObject = []
        let styleAtr = []
        // Adiciona o nome e os atributos dos styles criados
        for(let i = 0; i < styles.length; i++){
            let s = styles[i].split("{") // Divide em nome e atributos os estilos da tag
            let n = s[0]
            let b = s[1]
            if(n[0] == "."){
                stylesNames.push(n) // adiciona a uma lista de nomes de estilos já criados se não for um estilo de tag html
            }
            if(b != undefined && b != ""){
                let bs = b.split(";")
                let atrValues = []
                for(let j = 0; j < bs.length; j++){
                    let ats = bs[j].split(": ")
                    if(ats[0] != undefined && ats[0] != ""){
                        atrValues.push([ats[0], ats[1]])
                    }
                }
                stylesNamesObject.push([n, atrValues]) // Adiciona a uma lista de estilos o nome e sua lista de atributos, formatada acima
            }
        }
        // Adiciona os atributos do style do argumento
        for(let j = 0; j < style.length; j++){
            let s = style[j].split(": ")
            if (s[0] != ""){
                styleAtr.push([s[0], s[1]]) // Cria uma lista com os atributos do estilo fornecido
            }
        }
        // Verifica se existe algum estilo com os mesmos atributos
        let className = ""
        for(let k = 0; k < stylesNamesObject.length; k++){ // Para cada estilo já criado, verifica se pode reutilizar o nome
            let sN = stylesNamesObject[k]
            let es = 0;
            for(let l = 0; l < sN[1].length; l++){
                let atrN = sN[1][l][0]
                let atrA = sN[1][l][1]
                for(let m = 0; m < styleAtr.length; m++){
                    if(styleAtr[m][0] == atrN && styleAtr[m][1] == atrA){
                        es += 1
                        break
                        }
                }
            }   
            if(es == styleAtr.length && es == sN[1].length){
                className = sN[0].replace(".", "")
                break
            }
        }

        if(t == "root"){
            document.getElementsByTagName("style")[0].innerHTML += `.${className}${stl.replaceAll("\n", "").replaceAll("  ","")}`
            for(let p = 1; p < stylesGotten.length; p++){
                let inst = stylesGotten[p]
                let insN = inst.split("{")[0].replaceAll("\n", "").replaceAll("  ", "")
                let insA = inst.split("{")[1]
                if(insA != undefined){document.getElementsByTagName("style")[0].innerHTML += `${insN}{${insA.replaceAll("\n", "").replaceAll("  ","")}}`}
            }
        }
        // Caso não tenha adicionado nome (ou seja, não foi encontrado estilo com atributos similares), adiciona-se
        else if(className == ""){
            className = randomName(stylesNames)
            document.getElementsByTagName("style")[0].innerHTML += `.${className}${stl.replaceAll("\n", "").replaceAll("  ","")}`
            for(let p = 1; p < stylesGotten.length; p++){
                let inst = stylesGotten[p]
                let insN = inst.split("{")[0].replaceAll("\n", "").replaceAll("  ", "")
                let insA = inst.split("{")[1]
                if(insN == ":responsive"){
                    document.getElementsByTagName("style")[0].innerHTML += `@media screen and (max-width: 1000px){.${className}{${insA.replaceAll("\n", "").replaceAll("  ","")}}}`
                }
                else if(insN.split(" ")[0] == "@keyframes"){ // Em vez de { e }, será usado [ e ] no argumento
                    document.getElementsByTagName("style")[0].innerHTML += `${insN}{${insA.replaceAll("\n", "").replaceAll("  ","").replaceAll("[", "{").replaceAll("]", "}")}}`
                }
                else if(insN != undefined && insN != ""){
                    document.getElementsByTagName("style")[0].innerHTML += `.${className}${insN}{${insA.replaceAll("\n", "").replaceAll("  ","")}}`
                }
            }
        }
        return(className)
    }

    const el = document.createElement(t)
    if(stl != undefined){
        el.className = addClass()
    }
    return(el)
}

window.construct = function construct(p){
    const root = document.getElementById("root")
    root.innerHTML = ""
    if(p == undefined){
        if(window.location.href.split("br/")[1] != undefined && window.location.href.split("br/")[1] != ""){
            let paths = window.location.href.split("br/")[1].split("/")
            if(paths[0] == "produtos" || paths[0].split("?")[0] == "produtos"){
                root.appendChild(products(paths[0].split("?")[1]))
            }
            else if(paths[0] == "pedidos"){
                root.appendChild(order())
            }
            else if(paths[0] == "admin"){
                root.appendChild(admin())
            }
            else{
                root.appendChild(main())
            }
        }
        else{
            root.appendChild(main())
        }
    }
    else{
        if(p.page == "order"){root.appendChild(order(p.data))}
        else if(p.page == "admin"){root.appendChild(admin(p.data))}
    }
}

//window.apiURL = ""

//axios.defaults.headers.common["ngrok-skip-browser-warning"] = "69420"
document.getElementsByTagName("head")[0].appendChild(document.createElement("style"))
cE("root", `html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big, 
    cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,
    dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article, 
    aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,
    time,mark,audio,video,button,input,textarea{
        display:block;
        background:none;
        margin:0px;
        padding:0px;
        border:none;
        font-size:100%;
        font:inherit;
        vertical-align:baseline;
        text-decoration:none;
        font-weight:none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box;
    }
    span{display:inline-block;}
    input:focus, button:focus{outline: none;border: auto;}
    button{cursor: pointer;}
    body {line-height: 1.3;}
    ol, ul {list-style: none;}
    blockquote, q {quotes: none;}
    blockquote:before, blockquote:after, q:before, q:after {content: '';content: none;}
    table {border-collapse: collapse;border-spacing: 0;}
    :root{
    	--colorWhite:rgb(255, 255, 255);
    	--colorBlack:rgb(14, 31, 45);
        --colorOrange:rgb(251, 141, 103);
        --colorYellow:rgb(255, 223, 181);
        --colorBlue:rgb(28, 142, 168);
    }
    @font-face{
        font-family:"Quicksand";
        src:url("./assets/font/Quicksand_Book.otf");
    }
    body{
    	box-sizing:border-box;
    	font-family:"Quicksand";
    	background:var(--colorBlack);
    	cursor:default;
	    user-select:none;
    }
    ::-webkit-scrollbar{
    	height:3px;
        width:3px;
    	background:none;
    }
    ::-webkit-scrollbar-track{
        background:none;
    	margin:0px;
    }
    ::-webkit-scrollbar-thumb{
        background:var(--colorBlue);
        border-radius:20px;
    }
    ::-webkit-scrollbar-button{
        height:0px;
	    width:0px;
    	background:none;
        padding:0px;
        margin:0px;
    }`)
    
window.stringifyNumber = function stringifyNumber(n){
    let numberParts = n.toString().split(".")
    let integerPart = numberParts[0]
    integerPart = integerPart.split("").reverse().join(""); // 1234 => 4321, para ficar mais fácil adicionar os pontos nas centenas
    let newIntegerPart = "", newFractionalPart = ""    
    
    for(let i = 0; i < integerPart.length; i++){
        newIntegerPart += integerPart[i]
        if((i + 1)%3 == 0 && i != integerPart.length - 1 && n > 0){newIntegerPart += "."}
    }

    if(numberParts.length > 1){ // Verifica se há casa decimal
        newFractionalPart = (Math.floor(Number("0." + numberParts[1])*100)).toString() // Formata para dois algarismos significativos
        if(newFractionalPart.length == 1){newFractionalPart = "0" + newFractionalPart} // Adciona o zero a esquerda caso menor do que 10
    }
    else{newFractionalPart = "00"} // Não havendo, atribui 00
    
    return(`R$ ${newIntegerPart.split("").reverse().join("")},${newFractionalPart}`)
}

window.exampleProducts = [
    {
        id:"d3476",
        title:"Salmão chileno tipo A tamanho M característica C",
        category:"Peixes",
        price:50,
        revenue:15,
        unit:"kg",
        supplier:"12341",
        srcs:[
            "https://png.pngtree.com/png-clipart/20230928/original/pngtree-slice-of-salmon-fillet-png-image_13009822.png",
            "https://www.portaldoagronegocio.com.br/img/cache/cover//storage/images/notices/6328490885dfb.jpg",
            "https://swiftbr.vteximg.com.br/arquivos/ids/201884-768-768/616003-pedacos-de-file-de-salmao_1.jpg?v=638665894571100000"
        ]
    },
    {
        id:"234h6",
        title:"Atum dinamarquês tipo A tamanho M característica C",
        category:"Peixes",
        price:40,
        revenue:12,
        unit:"kg",
        supplier:"12341",
        srcs:[
            "https://mercachefe.pt/pt/vigo/21994-thickbox_default/lomo-de-atum-fresco-embalado-a-v%C3%A1cuo-kg.jpg",
            "https://conteudo.imguol.com.br/c/entretenimento/19/2023/01/04/bifes-de-atum-cru-1672859416156_v2_1254x836.jpg",
            "https://s2-globorural.glbimg.com/DTYTT39VTop498gnGGXbDZa0JSc=/0x0:1024x484/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_afe5c125c3bb42f0b5ae633b58923923/internal_photos/bs/2023/y/5/WfsWYNQwOhUM9NRCb1kg/1024px-thunnus-obesus-bigeye-tuna-.jpg"
        ]
    },
    {
        id:"ryn19",
        title:"Camarão do tipo J tamanho G característica K",
        category:"Frutos do mar",
        price:47,
        revenue:13,
        unit:"kg",
        supplier:"12341",
        srcs:[
            "https://malumarpescados.com.br/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/i/m/imagem_2_5.jpg",
            "https://blog.terrasantacamaroes.com.br/wp-content/uploads/2023/03/camarao-assado-frito-em-prato-com-limao-salsa-alho-alho-1-1.jpg",
            "https://swiftbr.vteximg.com.br/arquivos/ids/207578-450-450/615776-camarao-pre-cozido-descascado-sem-cabeaa-60-80-71-90_inn.jpg?v=638850927373430000"
        ]
    },
    {
        id:"12387",
        title:"Cupim bovino do tipo F tamanho K característica L",
        category:"Bovinos",
        price:33,
        revenue:7,
        unit:"kg",
        supplier:"12341",
        srcs:[
            "https://www.davo.com.br/ccstore/v1/images/?source=/file/v2516139848162315495/products/prod_2756.imagem1.jpg&height=940&width=940",
            "https://www.minhareceita.com.br/app/uploads/2025/02/R0125-MT-Cupim-grelhado-ao-natural-com-legumes-na-brasa-1200x675-1-1-1200x480.webp",
            "https://canalcozinha.com.br/wp-content/uploads/2025/01/Cupim-carne-1-1024x576.png"
        ]
    },
    {
        id:"bcsdf",
        title:"Lombo suíno nórdico tipo F tamanho G característica M",
        category:"Suínos",
        price:27,
        revenue:8.5,
        unit:"kg",
        supplier:"12341",
        srcs:[
            "https://bretas.vtexassets.com/arquivos/ids/185378-800-auto?v=638375504073730000&width=800&height=auto&aspect=true",
            "https://static.itdg.com.br/images/1200-630/3c6f3e568cd1fcbfe83efa71d040dec3/shutterstock-2203816749-2-.jpg",
            "https://receitas.wap.ind.br/wp-content/uploads/2024/09/lombo-de-porco-1080x640.jpg"
        ]
    }
]

window.exampleClient = {
    id:"2c4",
    cnpj:"12.123.123/0001-12",
    businessName:"1234 Peixaria e Sushi",
    email:"joao@joao.com.br",
    phoneNumber:"(041) 99171-8360",
    password:"1234"
}

window.exampleOrder = {
    id:"d123",
    clientid:"2c4",
    clientcnpj:"12.123.123/0001-12",
    clientname:"1234 Peixaria e Sushi",
    date:"01/01/2025",
    hour:"12:05",
    status:"Concluído",
    items:[
        {
            id:"234h6",
            quantity:12,
            unit:exampleProducts[1].unit,
            price:48.75,
            revenue:exampleProducts[1].revenue,
            currentPrice:exampleProducts[1].price,
            title:exampleProducts[1].title,
            category:exampleProducts[1].category,
            srcs:exampleProducts[1].srcs
        },
        {
            id:"ryn19",
            quantity:25,
            unit:exampleProducts[2].unit,
            price:49.5,
            revenue:exampleProducts[2].revenue,
            currentPrice:exampleProducts[2].price,
            title:exampleProducts[2].title,
            category:exampleProducts[2].category,
            srcs:exampleProducts[2].srcs
        }
    ]
},

window.exampleOpenOrder = {
    id:"d123",
    clientid:"2c4",
    clientcnpj:"12.123.123/0001-12",
    clientname:"1234 Peixaria e Sushi",
    date:"01/01/2025",
    hour:"12:05",
    status:"Em andamento",
    items:[
        {
            id:"234h6",
            quantity:12,
            unit:exampleProducts[1].unit,
            price:48.75,
            revenue:exampleProducts[1].revenue,
            currentPrice:exampleProducts[1].price,
            title:exampleProducts[1].title,
            category:exampleProducts[1].category,
            srcs:exampleProducts[1].srcs
        },
        {
            id:"ryn19",
            quantity:25,
            unit:exampleProducts[2].unit,
            price:49.5,
            revenue:exampleProducts[2].revenue,
            currentPrice:exampleProducts[2].price,
            title:exampleProducts[2].title,
            category:exampleProducts[2].category,
            srcs:exampleProducts[2].srcs
        }
    ]
},

window.exampleOrderPage = {
    user:exampleClient,
    orders:[exampleOrder, exampleOrder, exampleOrder],
    products:[...exampleProducts, ...exampleProducts, ...exampleProducts]
}

window.exampleClientAdmin = {
    id:"2c4",
    cnpj:"12.123.123/0001-12",
    businessName:"1234 Peixaria e Sushi",
    email:"joao@joao.com.br",
    phoneNumber:"(041) 99171-8360",
    password:"1234",
    orders:[exampleOrder, exampleOrder, exampleOrder, exampleOpenOrder]
}

window.exampleOrders = [exampleOrder, exampleOrder, exampleOrder, exampleOpenOrder, exampleOpenOrder]

window.exampleAdminPage = {
    user:{
        password:"1234"
    },
    users:[exampleClientAdmin, exampleClientAdmin, exampleClientAdmin],
    orders:exampleOrders,
    products:[...exampleProducts, ...exampleProducts, ...exampleProducts]
}

construct()