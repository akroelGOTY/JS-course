// tipos de dados
    //number
    let x = 5; // pode ser inteiro ou decimal
    let y = 3.14; // número de ponto flutuante
    console.log(typeof x, typeof y);

    //string
    let nome = "João";
    let idade = "15 anos";
    console.log("Strings:", nome , idade);
    console.log(typeof nome, typeof idade);
        // concatenação de strings
        let saudacao = "Olá, " + nome + "! Você tem " + idade + ".";
        console.log(saudacao);
        // template literals (interpolação de strings)
        let saudacaoTemplate = `Olá, ${nome}! Você tem ${idade}.`;
        console.log(saudacaoTemplate);

    // null: “Eu sei que essa variável existe, mas ela não tem valor no momento.”
    let usuario = null;
    console.log(usuario);

    //undefined: variável foi criada mas nunca recebeu valor.
    let user;
    console.log(user); // undefined

    // booleans
    console.log(typeof true)
    console.log(15 > 4)
    console.log(false)

// JavaScript Objects
    // objetos são estruturas de dados que armazenam informações em pares de chave-valor
    const pessoa = {
        nome: "Lucas",
        idade: 16,
        falar: function() {
            console.log("Oi!");
        }
    };

    console.log(pessoa.nome); // Acessando a propriedade nome
    console.log(pessoa.idade); // Chamando o método falar
    pessoa.falar(); // Chamando o método falar
    pessoa.cidade = "São Paulo"; // ➕ Adicionando coisas depois
    delete pessoa.idade; // ➖ Deletando coisas depois