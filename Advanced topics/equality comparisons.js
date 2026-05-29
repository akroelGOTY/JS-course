// Equality comparisons
 // O resultado da avaliação de um operador de igualdade é sempre do tipo booleano,
 // dependendo se a comparação é verdadeira ou não. (true ou false)
    // -> ( == ), ( === ), ( != ), ( !== )

// 🧠 Exemplo simples
    const valorUm = 5;
    const valorDois = 10;

    console.log(valorUm == valorDois); // false
    console.log(valorUm != valorDois); // true
    console.log(valorUm === valorDois); // false
    console.log(valorUm !== valorDois); // true

    // ❗ Você já viu esse contéudo antes sobre comparação de igualdade
      // Só que iremos aprofundar um pouco mais sobre as diferenças entre os operadores de igualdade.
      // É bom dar uma olhada no conteúdo de comparação de igualdade para entender melhor !

    // 1️⃣ Operador de igualdade (==)
      // O operador de igualdade (==) verifica se seus dois operandos são iguais, 
      // retornando um resultado booleano.

      // Na sua sintaxe -> ( x == y )

        console.log(1 == 1);
        // Expected output: true ( Resultado esperado: true )

        console.log("hello" == "hello");
        // Expected output: true ( Resultado esperado: true )

        console.log("1" == 1);
        // Expected output: true ( Resultado esperado: true )
          // pois o operador de igualdade (==) realiza coerção de tipo, convertendo a string "1" para o número 1 antes de comparar os valores.

        console.log(0 == false);
        // Expected output: true ( Resultado esperado: true )
          // pois o operador de igualdade (==) realiza coerção de tipo, convertendo o booleano false para o número 0 antes de comparar os valores.

        // Comparison of objects (Comparação de objetos)
          // Pelo proprio nome já diz, objetos são comparados por referência,
          // eles são iguais apenas se referenciam o mesmo objeto na memória.

        const object1 = {
            key: "value",
        };

        const object2 = {
            key: "value",
        };

        console.log(object1 == object2); // false
        console.log(object1 == object1); // true

    // 2️⃣ Operador de identidade (===)
      // O operador de identidade (===) verifica se seus dois operandos são estritamente iguais, 
      // ou seja, eles são do mesmo tipo e têm o mesmo valor, retornando um resultado booleano.

      // Na sua sintaxe -> ( x === y )

      "5" === 5; // false (string e número são de tipos diferentes)
      "5" === "5"; // true (ambas são strings e têm o mesmo valor)
      0 === false; // false (número e booleano são de tipos diferentes)

        const obj1 = { key: "value" };
        const obj2 = { key: "value" };
        obj1 === obj2; // false (obj1 e obj2 são objetos diferentes na memória)


        