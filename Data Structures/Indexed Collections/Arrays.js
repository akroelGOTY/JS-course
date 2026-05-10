// Arrays
 // São listas que servem para armazenar vários valores em uma única variável.
 // São indexados, ou seja, cada elemento tem um índice que começa em 0.
 // Podem conter qualquer tipo de dado, inclusive outros arrays.

    // Criando um array:
    const frutas = ['maçã', 'banana', 'laranja'];
    console.log(frutas); // ['maçã', 'banana', 'laranja']

    // Verificando o tipo do array:
    console.log(typeof frutas); // object
    console.log(Array.isArray(frutas)); // true

    // Acessando elementos do array:
    console.log(frutas[0]); // 'maçã'
    console.log(frutas[1]); // 'banana'
    console.log(frutas[2]); // 'laranja'
    console.log(frutas[3]); // undefined

// Modificando um elemento do array:
  frutas[1] = 'uva';
  console.log(frutas); // ['maçã', 'uva', 'laranja']

  // ==============================

  // Metódos de array:

  // Adiciona um elemento no final do array:
    frutas.push('abacaxi');
    console.log(frutas); // ['maçã', 'uva', 'laranja', 'abacaxi']

    // Adiciona um elemento no início do array:
    frutas.unshift('morango');
    console.log(frutas); // ['morango', 'maçã', 'uva', 'laranja']

    // Remove o último elemento do array:
    frutas.pop();
    console.log(frutas); // ['maçã', 'uva', 'laranja']

    // Remove o primeiro elemento do array:
    frutas.shift();
    console.log(frutas); // ['maçã', 'uva', 'laranja']

    // Concatena dois arrays:
    const vegetais = ['alface', 'tomate'];
    const doces = ['chocolate', 'pirulito'];
    const arrDoceAndVegetal = vegetais.concat(doces);
    console.log(arrDoceAndVegetal); // ['alface', 'tomate', 'chocolate', 'pirulito']

  // Loop em arrays:
   // Usamos o loop em arrays para percorrer cada elemento do array e realizar alguma ação com ele.
    // Usando for:
    for (let i = 0; i < frutas.length; i++) {
      console.log(`Elemento ${i}: ${frutas[i]}`); // [i] usamos "i" para acessar o elemento do array
    }

  // Usando IndexOf e lastIndexOf:
    // O método indexOf retorna o índice da primeira ocorrência de um elemento no array, ou -1 se não for encontrado.
     // Exemplo:
     const arrNumbers = [1, 2, 3, 4, 5];
     console.log(arrNumbers.indexOf(5)); // 4
     console.log(arrNumbers.indexOf(6)); // -1

    // O método lastIndexOf retorna o índice da última ocorrência de um elemento no array, ou -1 se não for encontrado.
     // Exemplo:
     const arrNumbers2 = [1, 2, 3, 4, 5, 2];
     console.log(arrNumbers2.lastIndexOf(2)); // 5
     console.log(arrNumbers2.lastIndexOf(6)); // -1

    // Slice:
     // O método slice() é usado em arrays (e também em strings) para extrair uma parte do array sem modificar o original.

    // 📌 Exemplos
      // 1️⃣ Pegando parte do array

      const numeros = [10, 20, 30, 40, 50];
      const parte = numeros.slice(1, 3); 
      // O primeiro parâmetro é o índice de início (inclusive) e o segundo é o índice de fim (exclusive)
      // O resultado é um novo array contendo os elementos do índice 1 ao 2 (20 e 30)
      // "o segundo parâmetro está falando q vou parar nesse item da sua array" -> ou seja, o item do índice 3 (40) não será incluído no resultado

      console.log(parte); // [20, 30]
      console.log(numeros); // [10, 20, 30, 40, 50] (não foi alterado)

      // 2️⃣ Sem informar o fim

      const num = [10, 20, 30, 40, 50];
      const parte2 = num.slice(2); 
      // Se o segundo parâmetro for omitido, o slice() irá extrair até o final do array a partir do índice especificado no primeiro parâmetro
      console.log(parte2); // [30, 40, 50]

      // 3️⃣ Usando índice negativo

      const num3 = [10, 20, 30, 40, 50];
      const ultimos = num3.slice(-2);
      // Índices negativos contam a partir do final do array, ou seja, -1 é o último elemento, -2 é o penúltimo, e assim por diante.
      // Então, slice(-2) irá extrair os últimos dois elementos do array.
      console.log(ultimos); // [40, 50]

      // 4️⃣ Copiando um array
      const original = [1, 2, 3];
      const copia = original.slice(); // Se o slice() for chamado sem argumentos, ele irá criar uma cópia superficial do array original.
      console.log(copia); // [1, 2, 3]

      // ForEach:
       // O método forEach() é usado para executar uma função para cada elemento do array.
       // Ele não retorna um novo array, apenas executa a função para cada elemento.
        // Exemplo:

        const arrFrutas = ['maçã', 'banana', 'laranja'];
        arrFrutas.forEach((fruta, index) => { 
          // O método forEach recebe uma função de callback que é executada para cada elemento do array.
          // A função de callback pode receber até três argumentos: o elemento atual, o índice do elemento e o array original.

          console.log(`Índice ${index}: ${fruta}`); // index é o índice do elemento atual e fruta é o valor do elemento atual
        });

        // Exemplo com objetos:

        const words = [
          {word: 'Hello', language: 'English'},
          {word: 'Hola', language: 'Spanish'},
          {word: 'Bonjour', language: 'French'}
        ];

        words.forEach((word) => {
          console.log(`Palavra: ${word.word}, Idioma: ${word.language}`);
        });

      // Include:
       // O método includes() é usado para verificar se um array contém um determinado elemento, retornando true ou false.
        // Exemplo:
          const arrAnimais = ['cachorro', 'gato', 'pássaro'];
          console.log(arrAnimais.includes('gato')); // true
          console.log(arrAnimais.includes('peixe')); // false
         
          if (arrAnimais.includes('cachorro')) {
            console.log('O array contém cachorro');
          } else {
            console.log('O array não contém cachorro');
          }

      // Reverse:
       // O método reverse() é usado para inverter a ordem dos elementos em um array. Ele modifica o array original.
        // Exemplo:
          const arrNumeros = [11, 22, 33, 44, 55];
          arrNumeros.reverse();
          console.log(arrNumeros); // [55, 44, 33, 22, 11]
        
  // ==============================

  // ==============================

  // Métodos de strings:

  // Trim:
   // O método trim() é usado para remover os espaços em branco do início e do fim de uma string.
    // Exemplo:
      const str = '   Olá, mundo! \n  ';
      console.log(str); // '   Olá, mundo! \n  '
      console.log(str.length); // 18 (conta os espaços e a quebra de linha)
      console.log(str.trim()); // 'Olá, mundo!'
      console.log(str.trim().length); // 12 (conta apenas os caracteres sem os espaços)

  // PadStart e PadEnd:
   // O método padStart() é usado para preencher o início de uma string com um caractere específico até atingir um comprimento total.
   // O método padEnd() é usado para preencher o final de uma string com um caractere específico até atingir um comprimento total.
   // Exemplo:
      const str2 = '5';
      console.log(str2.padStart(3, '0')); // '005' (preenche o início da string com '0' até atingir um comprimento total de 3)
      console.log(str2.padEnd(3, '0')); // '500' (preenche o final da string com '0' até atingir um comprimento total de 3)

  // Split:
   // O método split() é usado para dividir uma string em um array de substrings com base em um separador especificado.
    // Exemplo:
      const str3 = 'Olá, mundo! Bem-vindo ao JavaScript.';
      const palavras = str3.split(' '); // O separador é um espaço, então a string será dividida em palavras
      console.log(palavras); // ['Olá,', 'mundo!', 'Bem-vindo', 'ao', 'JavaScript.']

  // Join:
   // O método join() é usado para unir os elementos de um array em uma única string, usando um separador especificado.
    // Exemplo:
      const acessorios = ['óculos', 'relógio', 'pulseira'];
      const txt = `Eu tenho: ${acessorios.join(', ')}.`; // O separador é uma vírgula seguida de um espaço, então os elementos do array serão unidos com essa formatação
      console.log(txt); // 'Eu tenho: óculos, relógio, pulseira.'

  // Repeat:
   // Repete um texto n vezes, onde n é o número passado como argumento.
    // Exemplo:
      const str4 = 'Olá! ';
      console.log(str4.repeat(5)); // 'Olá! Olá! Olá! Olá! Olá! ' (repete a string 5 vezes)

  // Rest Operator:
   // O operador rest (...) é usado para representar um número indefinido de argumentos como um array.
   // Ele é útil para funções que podem receber um número variável de argumentos.
    // Exemplo:
      function soma(...args) { // O operador rest é usado para coletar todos os argumentos passados para a função em um array chamado "args"
        return args.reduce((total, num) => total + num, 0); // O método reduce() é usado para somar todos os números do array, começando com um valor inicial de 0
      }

      console.log(soma(1, 2, 3)); // 6
      console.log(soma(4, 5, 44, 23)); // 76
      console.log(soma()); // 0 (se nenhum número for passado, a soma será 0)

  // For...of:
   // O loop for...of é usado para iterar sobre elementos de um array ou outros objetos iteráveis, como strings.
    // Exemplo:
      const arr = ['a', 'b', 'c'];
      for (const element of arr) {
        console.log(element);
      } // 'a', 'b', 'c' (imprime cada elemento do array em uma linha)

  // Destructuring:
   // A desestruturação é uma sintaxe que permite extrair valores de arrays ou propriedades de objetos em variáveis distintas.
    // Exemplo com arrays:

      const arr5 = [1, 2, 3];
      const [a, b, c] = arr5;
      // A desestruturação de arrays permite atribuir os valores do array a variáveis individuais com base na posição dos elementos.
      
      console.log(a); // 1
      console.log(b); // 2
      console.log(c); // 3

  // ==============================