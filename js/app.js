console.log("Hello from app.js!");

// abreviações 
    // var = variável global ou local
    // let = variável de escopo de bloco
    // const = constante (valor fixo)
        // NaN (Not a Number): resultado de uma operação matemática inválida
        let invalidNumber = 0 / 0;
        console.log("Valor inválido:", invalidNumber); // NaN

// arithmetic operators (+, -, *, /, %)
    // exemplo de uso dos operadores aritméticos
        let a = 10;
        let b = 5;
        console.log("Soma:", a + b); // 15
        console.log("Subtração:", a - b);
        console.log("Multiplicação:", a * b);
        console.log("Divisão:", a / b);
        console.log("Módulo:", a % b); // resto da divisão

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

// Comparações
    // maior e menor: > e <
    // maior ou igual e menor ou igual: >= e <=
    // igual: ==
    // diferente: !=
    // idêntico: ===
        // exemplos:
        console.log(4 <= 4)
        console.log(10 == 10)
        console.log(10 === "10")
        console.log(5 != 5)
        console.log(5 != "5")
        console.log(5 !== "5")

// Operadores lógicos
    /*
    servem para unir duas ou mais
    comparações, o final também é
    em Boolean
    */
   // && - AND -true apenas se os dois forem verdadeiros
   // || - OR - para ser trueum lado como true é suficiente
   // ! - NOT - este operador inverte a comparação
        // exemplos:
        console.log(true && true)
        console.log(true && false)
        console.log(5 > 2 && 3 > 2)
        console.log(1 < 5 && "lucas" === 1)
            console.log(1 < 5 || "lucas" === 1)
            console.log(5 > 2 || 3 > 22)
                console.log(!true)
                console.log(!5 < 2)

