// Javascript objects
    // objeto é uma estrutura que guarda dados + comportamentos juntos. Ele funciona como uma “caixinha” com propriedades e funções.
    const pessoa = {
        nome: "Lucas",
        idade: 16,
        falar: function() {
            console.log("Oi!");
        }
    };

    // acessar propriedades
    console.log(pessoa.nome); // Lucas
    console.log(pessoa.idade); // 16

    // chamar função
    pessoa.falar(); // Oi!

    // acessar propriedades usando colchetes
    console.log(pessoa["nome"]); // Lucas
    console.log(pessoa["idade"]); // 16

    // adicionar nova propriedade
    pessoa.cidade = "São Paulo";
    console.log(pessoa.cidade); // São Paulo

    // modificar propriedade
    pessoa.idade = 17;
    console.log(pessoa.idade); // 17

    // remover propriedade
    delete pessoa.cidade;
    console.log(pessoa.cidade); // undefined

    // loop em objetos
    for (let chave in pessoa) {
        console.log(chave, pessoa[chave]);
    }

// Prototipos de objetos
    // prototipo é um objeto do qual outros objetos herdam propriedades e métodos. Ele funciona como um modelo para criar novos objetos.
    const myObject = {
        city: "Madrid",
        greet() {
            console.log(`Greetings from ${this.city}`);
        },
    };

    myObject.greet(); // Greetings from Madrid