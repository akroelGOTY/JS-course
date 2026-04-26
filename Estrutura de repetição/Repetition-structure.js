// Estrutura de repetição
// while / do while / for / switch
    // while -> faz uma ação até que uma condição seja atingida
    let i = 0;

    while (i < 4) { // enquanto i for menor que 4, o código dentro do while será executado
        i = i + 1; // isso é o mesmo que ( i++ ou i += 1 ) e isso é um contador, ele é importante para que o loop não seja infinito
        console.log(`Somando: ${i}`);
    }

    // Aviso !: 
        // não esquecer de colocar o contador dentro do while.
        // caso contrário, o loop será infinito e isso pode travar o navegador ou o computador.
        // dependendo do ambiente onde o código está sendo executado.

    // loop infinito
    //    while (i < 4) {
    //    console.log(`Somando: ${i}`);
    //   }

    // do while -> semelhante ao while
    let o = 12;
    do {
        console.log(`diminuindo: ${o}`);
        o--;
    } while (o > 8);

    // for -> condensa toda a lógica do código em uma linha
    // for (inicialização; condição; incremento)
    // for em português: para
    for (let i = 0; i < 10; i++) { // para i igual a 0, enquanto i for menor que 10, i vai ser incrementado em 1 a cada loop
        console.log(`Repetindo ${i}`)
    }

    // break -> usamos Break para podemos ejetar um loop fazendo q com as repetições sejam interrompidas quando uma condição for atingida
    // É muito util para poupar mémorio (otimização do código)

    for (let i = 18; i > 6; i--) {
        console.log(`value ${i}`)
        if (i === 12) {
            console.log(`O valor de "i" é igual a ${i}`)
            break
        }
    }

    // continue -> semelhante ao break
      // ele é usado para pular uma iteração específica do loop, ou seja, quando a condição for atingida, o código dentro do loop será pulado e o loop continuará com a próxima iteração.
    for (let i = 0; i < 10; i = i + 1) {
        if (i % 2 === 0) {
            console.log(`O número ${i}: é par`);
            continue;
        }
    }

// switch ->  é uma estrutura de controle usada para testar vários casos de uma variável/expressão e executar o bloco correspondente.
    // case é cada opção/valor que o switch compara para decidir o que executar.
    switch (dia) {
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    default:
        console.log("Outro dia");
    }
