// arrow functions (funções de seta)
 // são uma forma mais concisa de escrever funções em JavaScript, introduzidas no ES6. Elas são especialmente úteis para funções anônimas e callbacks.

    // 🎯 Pra que usar na prática?
        // 1. Código mais limpo
        [1, 2, 3].map(n => n * 2);

        // 2. Funções pequenas (callbacks)
        setTimeout(() => {
        console.log("Executou!");
        }, 1000);

        // 3. NÃO cria seu próprio this
        function Pessoa() {
          this.nome = "Lucas";

        setTimeout(() => {
          console.log(this.nome);
         }, 1000);
        }
    
    // Exemplo de uso de arrow function
    const arrowFunctionTest = () => {
        console.log("Esta é uma arrow function!");
    };
    arrowFunctionTest();

    const ParOuImpar = (numero) => {
        if (numero % 2 === 0) {
            console.log(`O número ${numero} é par.`);
            return;
        } else {
            console.log(`O número ${numero} é ímpar.`);
            return;
        }
    }
    ParOuImpar(6);

    const RaizQuadrada = (numero) => {
        return Math.sqrt(numero);
    }
    console.log("Raiz quadrada de 16:", RaizQuadrada(16));
