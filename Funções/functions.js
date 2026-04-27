// Funções
    // função é um bloco de código que pode ser reutilizado
    // function nomeDaFuncao() { código }

    function imprimirMensagem() {
        console.log("Olá, esta é uma função!");
    }

    imprimirMensagem(); // chamando a função

    // função com parâmetros
    function imprimirMensagemComNome(nome) {
        console.log(`Olá, ${nome}! Bem-vindo!`);
    }

    imprimirMensagemComNome("Lucas");

    // função com retorno
     // função com retorno é aquela que retorna um valor após sua execução
    function somar(a, b) {
        return a + b; // o valor retornado pode ser armazenado em uma variável ou usado diretamente
    }

    let resultado = somar(5, 3);
    console.log("Resultado da soma:", resultado);

    // escopo da função
     // escopo é a área onde uma variável ou função é acessível. Variáveis declaradas dentro de uma função não são acessíveis fora dela, e vice-versa.

    let variavelGlobal = "Eu sou global";
    // console.log(variavelLocal); // isso causará um erro, pois variavelLocal não está definida no escopo global

    function exemploEscopo() {
        let variavelLocal = "Eu sou local";
        console.log(variavelLocal);
        console.log(variavelGlobal);
    }
    exemploEscopo();

    // escopo aninhado
     // escopo aninhado ocorre quando uma função é definida dentro de outra função. A função interna tem acesso às variáveis da função externa, mas a função externa não tem acesso às variáveis da função interna.
    let variavelExterna = "1";

    function funcaoExterna() {
        let variavelInterna = "2";

        if(true) {
            let variavelBloco = "3";
            console.log(variavelBloco);
        }
            if(true) {
                console.log(variavelInterna);
                console.log(variavelExterna);
            }

        // console.log(variavelBloco); // isso causará um erro, pois variavelBloco não está definida no escopo da função externa
    }

    funcaoExterna();

    // exemplo prático:
    function calcularMediaBimestral(nota1, nota2) {
        let media = (nota1 + nota2) / 2;
        return media;
    }
    let mediaAluno = calcularMediaBimestral(8, 6);
    console.log(`A média bimestral do aluno é: ${mediaAluno}`);

    // Closure
      // Closure é um conceito em JavaScript onde uma função tem acesso às variáveis do seu escopo externo, mesmo após a função externa ter sido executada.
      // Isso permite que a função interna "lembre" do ambiente em que foi criada.

    // 🧠 Ideia simples
    // 👉 Closure = função + memória do escopo onde nasceu

    // Exemplo de closure:
    function contador() {
    let count = 0;

    return function() {
      count++;
      console.log(count);
     };
    }

    const c = contador();

    c(); // 1
    c(); // 2
    c(); // 3

    // count deveria “sumir” mas a função interna lembra dele - isso é closure!

    // Muito usado para:
     // 1. Guardar estado
     // 2. Variáveis privadas
     // 3. Funções de callback e etc...

    // Recursão
     // Recursão é uma técnica onde uma função chama a si mesma para resolver um problema.
     // Ela geralmente envolve uma condição de parada para evitar chamadas infinitas.

    function fatorial(n, m) {
        if (n < 20) {
            console.log(`A função foi parada`);
        } else {
            const x = n - m;
            console.log(x);
            fatorial(x, m);
        }
    }

    fatorial(100, 20);
