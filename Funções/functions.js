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
    function somar(a, b) {
        return a + b;
    }
    let resultado = somar(5, 3);
    console.log("Resultado da soma:", resultado);

    // escopo da função
    let variavelGlobal = "Eu sou global";

    function exemploEscopo() {
        let variavelLocal = "Eu sou local";
        console.log(variavelLocal);
        console.log(variavelGlobal);
    }
    exemploEscopo();

    // escopo aninhado
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
    }
    funcaoExterna();