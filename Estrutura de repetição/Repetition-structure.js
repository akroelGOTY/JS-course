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