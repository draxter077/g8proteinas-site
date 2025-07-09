export default function submit(){
    let style = `
        {
            font-size:20px;
            padding:5px 10px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            border-radius:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorOrange);
        }`

    const submit = cE("div", style)
    submit.innerHTML = "Entrar"
    submit.addEventListener(
        "click",
        function a(e){
            let signupDiv = e.target.parentElement.parentElement.children[1].children[0].children[0]
            let businessName = signupDiv.children[0].value
            let responsibleName = signupDiv.children[1].value
            let email = signupDiv.children[2].value
            let phoneNumber = signupDiv.children[3].value
            let cnpj = e.target.parentElement.parentElement.children[1].children[1].value
            let password = e.target.parentElement.parentElement.children[1].children[2].value
            
            if(e.target.innerHTML == "Entrar"){
                alert(`Entrando com ${cnpj} e ${password}`)
            }
            else{
                alert(`Criando ${businessName}, ${responsibleName}, ${email}, ${phoneNumber}, ${cnpj} e ${password}`)
            }
            let log = {
                user:{
                    id:0,
                    cnpj:"12.123.123/0001-12",
                    businessName:"1234 Peixaria e Sushi",
                    responsibleName:"João de Peixes",
                    email:"joao@joao.com.br",
                    phoneNumber:"(041) 99171-8360"
                },
                orders:[
                    {
                        id:1232123,
                        date:"01/01/2025",
                        hour:"12:05",
                        status:1,
                        items:[
                            {
                                id:1,
                                quantity:12,
                                unit:"kg",
                                price:50, // Got from items // products
                                currentPrice:51,
                                title:"Atum dinamarquês tipo A tamanho M característica C - Peixes",
                                srcs:[
                                    "https://mercachefe.pt/pt/vigo/21994-thickbox_default/lomo-de-atum-fresco-embalado-a-v%C3%A1cuo-kg.jpg",
                                    "https://conteudo.imguol.com.br/c/entretenimento/19/2023/01/04/bifes-de-atum-cru-1672859416156_v2_1254x836.jpg",
                                    "https://s2-globorural.glbimg.com/DTYTT39VTop498gnGGXbDZa0JSc=/0x0:1024x484/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_afe5c125c3bb42f0b5ae633b58923923/internal_photos/bs/2023/y/5/WfsWYNQwOhUM9NRCb1kg/1024px-thunnus-obesus-bigeye-tuna-.jpg"
                                ]
                            },
                            {
                                id:2,
                                quantity:25,
                                unit:"kg",
                                price:75.9,
                                currentPrice:75.9,
                                title:"Camarão do tipo J tamanho G característica K - Frutos do mar",
                                srcs:[
                                    "https://malumarpescados.com.br/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/i/m/imagem_2_5.jpg",
                                    "https://blog.terrasantacamaroes.com.br/wp-content/uploads/2023/03/camarao-assado-frito-em-prato-com-limao-salsa-alho-alho-1-1.jpg",
                                    "https://swiftbr.vteximg.com.br/arquivos/ids/207578-450-450/615776-camarao-pre-cozido-descascado-sem-cabeaa-60-80-71-90_inn.jpg?v=638850927373430000"
                                ]
                            }
                        ]
                    },
                    {
                        id:1232123,
                        date:"01/01/2025",
                        hour:"12:05",
                        status:1,
                        items:[
                            {
                                id:1,
                                quantity:12,
                                unit:"kg",
                                price:50,
                                currentPrice:51,
                                title:"Atum dinamarquês tipo A tamanho M característica C - Peixes",
                                srcs:[
                                    "https://mercachefe.pt/pt/vigo/21994-thickbox_default/lomo-de-atum-fresco-embalado-a-v%C3%A1cuo-kg.jpg",
                                    "https://conteudo.imguol.com.br/c/entretenimento/19/2023/01/04/bifes-de-atum-cru-1672859416156_v2_1254x836.jpg",
                                    "https://s2-globorural.glbimg.com/DTYTT39VTop498gnGGXbDZa0JSc=/0x0:1024x484/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_afe5c125c3bb42f0b5ae633b58923923/internal_photos/bs/2023/y/5/WfsWYNQwOhUM9NRCb1kg/1024px-thunnus-obesus-bigeye-tuna-.jpg"
                                ]
                            }
                        ]
                    },
                    {
                        id:1232123,
                        date:"01/01/2025",
                        hour:"12:05",
                        status:1,
                        items:[
                            {
                                id:1,
                                quantity:12,
                                unit:"kg",
                                price:50,
                                currentPrice:51,
                                title:"Atum dinamarquês tipo A tamanho M característica C - Peixes",
                                srcs:[
                                    "https://mercachefe.pt/pt/vigo/21994-thickbox_default/lomo-de-atum-fresco-embalado-a-v%C3%A1cuo-kg.jpg",
                                    "https://conteudo.imguol.com.br/c/entretenimento/19/2023/01/04/bifes-de-atum-cru-1672859416156_v2_1254x836.jpg",
                                    "https://s2-globorural.glbimg.com/DTYTT39VTop498gnGGXbDZa0JSc=/0x0:1024x484/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_afe5c125c3bb42f0b5ae633b58923923/internal_photos/bs/2023/y/5/WfsWYNQwOhUM9NRCb1kg/1024px-thunnus-obesus-bigeye-tuna-.jpg"
                                ]
                            }
                        ]
                    }
                ],
                products:[
                    {
                        id:0,
                        title:"Salmão chileno tipo A tamanho M característica C - Peixes",
                        price:50,
                        unit:"kg",
                        srcs:[
                            "https://png.pngtree.com/png-clipart/20230928/original/pngtree-slice-of-salmon-fillet-png-image_13009822.png",
                            "https://www.portaldoagronegocio.com.br/img/cache/cover//storage/images/notices/6328490885dfb.jpg",
                            "https://swiftbr.vteximg.com.br/arquivos/ids/201884-768-768/616003-pedacos-de-file-de-salmao_1.jpg?v=638665894571100000"
                        ]
                    },
                    {
                        id:1,
                        title:"Atum dinamarquês tipo A tamanho M característica C - Peixes",
                        price:40,
                        unit:"kg",
                        srcs:[
                            "https://mercachefe.pt/pt/vigo/21994-thickbox_default/lomo-de-atum-fresco-embalado-a-v%C3%A1cuo-kg.jpg",
                            "https://conteudo.imguol.com.br/c/entretenimento/19/2023/01/04/bifes-de-atum-cru-1672859416156_v2_1254x836.jpg",
                            "https://s2-globorural.glbimg.com/DTYTT39VTop498gnGGXbDZa0JSc=/0x0:1024x484/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_afe5c125c3bb42f0b5ae633b58923923/internal_photos/bs/2023/y/5/WfsWYNQwOhUM9NRCb1kg/1024px-thunnus-obesus-bigeye-tuna-.jpg"
                        ]
                    },
                    {
                        id:2,
                        title:"Camarão do tipo J tamanho G característica K - Frutos do mar",
                        price:47,
                        unit:"kg",
                        srcs:[
                            "https://malumarpescados.com.br/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/i/m/imagem_2_5.jpg",
                            "https://blog.terrasantacamaroes.com.br/wp-content/uploads/2023/03/camarao-assado-frito-em-prato-com-limao-salsa-alho-alho-1-1.jpg",
                            "https://swiftbr.vteximg.com.br/arquivos/ids/207578-450-450/615776-camarao-pre-cozido-descascado-sem-cabeaa-60-80-71-90_inn.jpg?v=638850927373430000"
                        ]
                    },
                    {
                        id:3,
                        title:"Cupim bovino do tipo F tamanho K característica L - Bovinos",
                        price:33,
                        unit:"kg",
                        srcs:[
                            "https://www.davo.com.br/ccstore/v1/images/?source=/file/v2516139848162315495/products/prod_2756.imagem1.jpg&height=940&width=940",
                            "https://www.minhareceita.com.br/app/uploads/2025/02/R0125-MT-Cupim-grelhado-ao-natural-com-legumes-na-brasa-1200x675-1-1-1200x480.webp",
                            "https://canalcozinha.com.br/wp-content/uploads/2025/01/Cupim-carne-1-1024x576.png"
                        ]
                    },
                    {
                        id:4,
                        title:"Lombo suíno nórdico tipo F tamanho G característica M - Suínos",
                        price:27,
                        unit:"kg",
                        srcs:[
                            "https://bretas.vtexassets.com/arquivos/ids/185378-800-auto?v=638375504073730000&width=800&height=auto&aspect=true",
                            "https://static.itdg.com.br/images/1200-630/3c6f3e568cd1fcbfe83efa71d040dec3/shutterstock-2203816749-2-.jpg",
                            "https://receitas.wap.ind.br/wp-content/uploads/2024/09/lombo-de-porco-1080x640.jpg"
                        ]
                    }
                ]
            }
            construct({page:"order", data:log})
        }
    )
    return(submit)
}