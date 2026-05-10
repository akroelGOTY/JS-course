// TypedArrays são arrays especiais do JavaScript que armazenam dados binários com tipo fixo. (número específico).
 // Diferente das Arrays normais do Javascript, eles só guardam um tipo específico de dado.
 // São usados para manipular grandes quantidades de dados binários, como imagens, áudio, etc.

// Existem vários tipos de TypedArrays, como Int8Array, Uint8Array, Float32Array, etc. Cada um tem um tamanho e tipo específico.
// A diferença entre as TypedArrays e as Arrays é que o TypedArray so aceita numeros inteiros de um tipo específico.

// Exemplo de uso de TypedArrays:

    let arr = new Int8Array([1, 2, 3]) // Criando um Int8Array com os valores 1, 2 e 3 
    // 👉 Só aceita números inteiros de 8 bits
    console.log(arr) // Imprime o Int8Array

    // 🧪 Exemplo simples
    let numeros = new Float32Array(3)

    numeros[0] = 1.5
    numeros[1] = 2.3
    numeros[2] = 3.7

    console.log(numeros) // Imprime o Float32Array com os valores 1.5, 2.3 e 3.7

    // TypedArrays são úteis para manipular dados binários de forma eficiente, como em jogos, gráficos, etc. 
    // Eles também são usados para trabalhar com WebGL e outras APIs que exigem manipulação de dados binários.

// 🧠 Por que usar TypedArrays?
 // 👉 Eficiência: Permitem manipular grandes quantidades de dados binários de forma rápida e eficiente
 // 👉 Memória: Utilizam menos memória em comparação com arrays normais
 // 👉 Desempenho: Oferecem melhor desempenho em operações de manipulação de dados binários

// ⚙️ Tipos mais usados
    // Int8Array: Armazena números inteiros de 8 bits (de -128 a 127) -> números inteiros pequenos
    // Uint8Array: Armazena números inteiros de 8 bits sem sinal (de 0 a 255) -> inteiros positivos
    // Float32Array: Armazena números de ponto flutuante de 32 bits -> números com decimal
    // Float64Array: Armazena números de ponto flutuante de 64 bits -> mais precisão