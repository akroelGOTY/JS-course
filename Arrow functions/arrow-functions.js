// arrow functions (funções de seta)
    const arrowFunctionTest = () => {
        console.log("Esta é uma arrow function!");
    }
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