// Estrutura de repetição
// while / do while / for / switch
    // while -> faz uma ação até que uma condição seja atingida
    let i = 0;

    while (i < 4) {
        i = i + 1;
        console.log(`Somando: ${i}`);
    }

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
    for (let i = 0; i < 10; i++) {
        console.log("repetindo: i")
    }

    for (let i = 0; i < 10; i++) {
        console.log(`Repetindo ${i}`)
    }

    // break -> usamos Break para podemos ejetar um loop fazendo q com as repetições cessem
    // É muito util para poupar mémorio (otimização do código)

    for (let i = 18; i > 6; i--) {
        console.log(`value ${i}`)
        if (i === 12) {
            console.log(`O valor de "i" é igual a ${i}`)
            break
        }
    }

    // continue -> semelhante ao break
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
