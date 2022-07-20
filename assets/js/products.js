const products = [
    {   id: 0,
        quantidade: 1,
        nome: "Colar de fio de poliester e brinco da amazônia",
        precoAtual: 89.00,
        precoSemDesconto: 165.95,
        categoria: "Acessório, muiraquitã",
        section: "Acessorio",
        image: "https://images-americanas.b2w.io/produtos/2033546165/imagens/367-jogo-de-colar-de-fio-de-poliester-com-seda-e-brinco-da-amazonia-modelo-muiraquita/2033546165_1_xlarge.jpg",
        imageSize: 3,
        stars: 4.6,
        description:"Produtos inspirados em signos culturais da Amazônia."
    
    },

    {   id: 1,
        quantidade: 1,
        nome: "colar e pulseira colorida em sementes de açaí",
        precoAtual: 69.00,
        precoSemDesconto: 99.50,
        categoria: "Acessório, surisawa",
        section: "Acessorio",
        image: "https://images-americanas.b2w.io/produtos/2300660967/imagens/370-conjunto-de-colar-e-pulseira-colorida-em-sementes-de-acai-e-fio-de-tucum-da-amazonia/2300660967_1_xlarge.jpg",
        imageSize: 3,
        stars: 4.2,
        description:"Produtos produzidos pelos artesãos do Grupo Surisawa."
    
    },

    {   id: 2,
        quantidade: 1,
        nome: "kit de colares flor de fio",
        precoAtual: 69.00,
        precoSemDesconto: 0,
        categoria: "Acessório",
        section: "Acessorio",
        image: "https://images-americanas.b2w.io/produtos/3358619895/imagens/337-kit-de-colares-flor-de-fio-com-corrente-de-sementes-da-amazonia-modelo-2-2-unidades/3358619895_1_xlarge.jpg",
        imageSize: 3,
        stars: 4.4,
        description:"Do grupo de artesanato surisawa"
    
    },

    {   id: 3,
        quantidade: 1,
        nome: "Colares e pulseira em madeira e sementes da amazônia",
        precoAtual: 69.00,
        precoSemDesconto: 99.00,
        categoria: "Acessório",
        section: "Acessorio",
        image: "https://images-americanas.b2w.io/produtos/2033341346/imagens/356-jogo-de-colares-e-pulseira-em-madeira-e-sementes-da-amazonia-modelo-1-3-pecas/2033341346_1_xlarge.jpg",
        imageSize: 3,
        stars: 2.2,
        description:"Produto extraindo diretamente da natureza"
    
    },

    {   id: 4,
        quantidade: 1,
        nome: "Jogo de colar de fio de poliester",
        precoAtual: 89.00,
        precoSemDesconto: 165.90,
        categoria: "Acessório, Colar",
        section: "Acessorio",
        image: "https://images-americanas.b2w.io/produtos/2033546384/imagens/366-jogo-de-colar-de-fio-de-poliester-com-seda-e-brinco-da-amazonia-modelo-banzeiro/2033546384_1_xlarge.jpg",
        imageSize: 3,
        stars: 4.9,
        description:"Produto produzido pela artesã Rita Prossi"
    
    },

    {   id: 5,
        quantidade: 1,
        nome: "Conjunto de colar E pulseira",
        precoAtual: 69.00,
        precoSemDesconto: 0,
        categoria: "Acessório, Colar",
        section: "Acessorio",
        image: "https://images-americanas.b2w.io/produtos/2999061617/imagens/383-conjunto-de-colar-e-pulseira-semente-de-tento-da-amazonia-2-pecas/2999061617_1_xlarge.jpg",
        imageSize: 3,
        stars: 4.3,
        description:"Produto produzido pelo grupo de artesanato surisawa"
    
    },

    {   id: 6,
        quantidade: 1,
        nome: "Óculos de sol em madeira da amazônia",
        precoAtual: 205.90,
        precoSemDesconto: 0,
        categoria: "Acessório, Óculos",
        section: "Acessorio",
        image: "https://images-americanas.b2w.io/produtos/80990163/imagens/35-oculos-de-sol-em-madeira-da-amazonia-modelo-acu/80990163_1_xlarge.jpg",
        imageSize: 3,
        stars: 4.6,
        description:"Óculos PORANGAASs"
    
    },

    {   id: 7,
        quantidade: 1,
        nome: "bolsa de praia de palha de tucumã",
        precoAtual: 152.90,
        precoSemDesconto: 0,
        categoria: "Acessório, Bolsa",
        section: "Acessorio",
        image: "https://images-americanas.b2w.io/produtos/4514143578/imagens/482-bolsa-de-praia-de-palha-de-tucuma-da-amazonia-com-tingimento-natural-modelo-1/4514143578_1_xlarge.jpg",
        imageSize: 3,
        stars: 4.2,
        description:"Turiarte"
    
    },

    {   id: 8,
        quantidade: 1,
        nome: "boneca em tecido fruta (castanha) da amazônia",
        precoAtual: 159.00,
        precoSemDesconto: 0,
        categoria: "Artesanato, Boneca",
        section: "Artesanato",
        image: "https://images-americanas.b2w.io/produtos/102718106/imagens/84-boneca-em-tecido-fruta-castanha-da-amazonia/102718106_1_xlarge.jpg",
        imageSize: 2,
        stars: 4.6,
        description:"Feita pelo grupo produtivo Manaus"
    
    },

    {   id: 9,
        quantidade: 1,
        nome: "Chopó redondo de palha de tucumã",
        precoAtual: 112.00,
        precoSemDesconto: 0,
        categoria: "Artesanato, Chopó",
        section: "Artesanato",
        image: "https://images-americanas.b2w.io/produtos/4515188348/imagens/513-chopo-redondo-de-palha-de-tucuma-da-amazonia-modelo-3/4515188348_1_xlarge.jpg",
        imageSize: 2,
        stars: 4.1,
        description:"Feita pela Cooperativa de Turismo e Artesanato da Floresta"
    
    },

    {   id: 10,
        quantidade: 1,
        nome: "Mandala em fibra de bacaba da amazônia",
        precoAtual: 109.00,
        precoSemDesconto: 0,
        categoria: "Artesanato, Mandala",
        section: "Artesanato",
        image: "https://images-americanas.b2w.io/produtos/1370350745/imagens/143-mandala-em-fibra-de-bacaba-da-amazonia-gg/1370350745_1_xlarge.jpg",
        imageSize: 3,
        stars: 1.0,
        description:"Feita pela Cooperativa de Turismo e Artesanato da Floresta"
    
    },

    {   id: 11,
        quantidade: 1,
        nome: "Jogo americano amarelo com grafismo indígena",
        precoAtual: 94.00,
        precoSemDesconto: 99.00,
        categoria: "Artesanato, Mandala",
        section: "Artesanato",
        image: "https://images-americanas.b2w.io/produtos/94603523/imagens/80-jogo-americano-amarelo-com-grafismo-indigena-da-amazonia-2-pecas/94603523_1_xlarge.jpg",
        imageSize: 3,
        stars: 4.4,
        description:"Feita pela Cooperativa de Turismo e Artesanato"
    
    },

    {   id: 12,
        quantidade: 1,
        nome: "Jogo americano amarelo com grafismo",
        precoAtual: 199.00,
        precoSemDesconto: 0,
        categoria: "Artesanato, Balaios",
        section: "Artesanato",
        image: "https://images-americanas.b2w.io/produtos/4401169472/imagens/503-balaios-em-fibra-com-arte-indigena-da-amazonia-30cm-modelo-1/4401169472_1_xlarge.jpg",
        imageSize: 2,
        stars: 4.7,
        description:"Feita pela Cooperativa de Turismo e Artesanato"
    
    },


    {   id: 13,
        quantidade: 1,
        nome: "boto da amazônia em resíduo de madeira",
        precoAtual: 105.00,
        precoSemDesconto: 109.00,
        categoria: "Artesanato",
        section: "Artesanato",
        image: "https://images-americanas.b2w.io/produtos/1370447563/imagens/96-boto-da-amazonia-em-residuo-de-madeira-itauba-preta/1370447563_1_xlarge.jpg",
        imageSize: 3,
        stars: 4.6,
        description:"Feita pela Cooperativa de Turismo e Artesanato"
    
    },

    {   id: 14,
        quantidade: 1,
        nome: "Bandeja em resíduo de madeira saboarana",
        precoAtual: 799.00,
        precoSemDesconto: 0,
        categoria: "Artesanato",
        section: "Artesanato",
        image: "https://images-americanas.b2w.io/produtos/75390195/imagens/1-bandeja-em-residuo-de-madeira-saboarana-da-amazonia/75390195_1_xlarge.jpg",
        imageSize: 2,
        stars: 3.2,
        description:"Feita pela Cooperativa de Turismo e Artesanato"
    
    },

    {   id: 15,
        quantidade: 1,
        nome: "rede balanço do rio negro - modelo 3",
        precoAtual: 186.00,
        precoSemDesconto: 0,
        categoria: "Artesanato",
        section: "Redes",
        image: "https://images-americanas.b2w.io/produtos/4673509434/imagens/495-rede-balanco-do-rio-negro-modelo-5/4673509434_1_xlarge.jpg",
        imageSize: 1,
        stars: 4.4,
        description:"Do grupo familiar Balanço do Rio Negro"
    
    },

    {   id: 16,
        quantidade: 1,
        nome: "rede balanço do rio negro - modelo 5",
        precoAtual: 184.00,
        precoSemDesconto: 0,
        categoria: "Artesanato",
        section: "Redes",
        image: "https://images-americanas.b2w.io/produtos/4673508183/imagens/493-rede-balanco-do-rio-negro-modelo-3/4673508183_1_xlarge.jpg",
        imageSize: 1,
        stars: 4.8,
        description:"Do grupo familiar Balanço do Rio Negro"
    
    },

    {   id: 17,
        quantidade: 1,
        nome: "rede balanço do rio negro - modelo 1",
        precoAtual: 182.00,
        precoSemDesconto: 0,
        categoria: "Artesanato",
        section: "Redes",
        image: "https://images-americanas.b2w.io/produtos/4673507519/imagens/491-rede-balanco-do-rio-negro-modelo-1/4673507519_1_xlarge.jpg",
        imageSize: 1,
        stars: 4.8,
        description:"Do grupo familiar Balanço do Rio Negro"
    
    },

    {   id: 18,
        quantidade: 1,
        nome: "rede balanço do rio negro - modelo 2",
        precoAtual: 183.00,
        precoSemDesconto: 0,
        categoria: "Artesanato",
        section: "Redes",
        image: "https://images-americanas.b2w.io/produtos/4673506903/imagens/492-rede-balanco-do-rio-negro-modelo-2/4673506903_1_xlarge.jpg",
        imageSize: 1,
        stars: 4.1,
        description:"Do grupo familiar Balanço do Rio Negro"
    
    },

    {   id: 19,
        quantidade: 1,
        nome: "rede balanço do rio negro - modelo 4",
        precoAtual: 185.00,
        precoSemDesconto: 0,
        categoria: "Artesanato",
        section: "Redes",
        image: "https://images-americanas.b2w.io/produtos/4673505978/imagens/494-rede-balanco-do-rio-negro-modelo-4/4673505978_1_xlarge.jpg",
        imageSize: 1,
        stars: 4.7,
        description:"Do grupo familiar Balanço do Rio Negro"
    
    },

    {   id: 20,
        quantidade: 1,
        nome: "CHÁ + IMUNE IN NATURA 150g",
        precoAtual: 30.00,
        precoSemDesconto: 0,
        categoria: "Chá",
        section: "Produtos Naturais",
        image: "https://cdn.awsli.com.br/1000x1000/875/875667/produto/141790174/81471efd18.jpg",
        imageSize: 1,
        stars: 4.3,
        description:"Fortalece o sistema imunológico contra vírus, fungos e bactérias."
    
    },

    {   id: 21,
        quantidade: 1,
        nome: "GEL PARA MASSAGEM CAAPEBA",
        precoAtual: 32.20,
        precoSemDesconto: 0,
        categoria: "Gel",
        section: "Produtos Naturais",
        image: "https://cdn.awsli.com.br/1000x1000/875/875667/produto/34455514/1fadc68c88.jpg",
        imageSize: 1,
        stars: 4.1,
        description:"Poderoso gel analgésico e anti-inflamatório."
    
    },

    {   id: 22,
        quantidade: 1,
        nome: "KIT FACIAL CLAREADOR DE MULATEIRO",
        precoAtual: 79.90,
        precoSemDesconto: 0,
        categoria: "Gel",
        section: "Produtos Naturais",
        image: "https://cdn.awsli.com.br/800x800/875/875667/produto/101280157/f90c3616d1.jpg",
        imageSize: 1,
        stars: 4.2,
        description:"Nutre e repõe vitaminas, mantendo a firmeza o brilho e revitalizando seu rosto"
    
    },

    {   id: 23,
        quantidade: 1,
        nome: "KIT BAMBU MINI - 08 Sabonetes",
        precoAtual: 22.00,
        precoSemDesconto: 0,
        categoria: "Kit Presente",
        section: "Kit Presente",
        image: "https://cdn.awsli.com.br/800x800/875/875667/produto/142941737/c85e8ff324.jpg",
        imageSize: 1,
        stars: 4.2,
        description:"O produto vem com 08 mini sabonetes aromáticos "
    
    },

    {   id: 24,
        quantidade: 1,
        nome: "KIT BAMBU MIX",
        precoAtual: 59.80,
        precoSemDesconto: 0,
        categoria: "Kit Presente",
        section: "Kit Presente",
        image: "https://cdn.awsli.com.br/800x800/875/875667/produto/142949837/2a5e2647a5.jpg",
        imageSize: 1,
        stars: 4.2,
        description:"Composto por: 1 Água de Colônia, 2 Sabonetes, 1 Hidratante e 1 embalagem artesanal de bambu."
    
    },
]

