// Em Type Casting no JavaScript, é quando você converte um tipo de dado para outro.

// 🔄 Tipos de conversão de Type Casting: implícita e explícita.

    // Type Casting Implícita
    // O JavaScript pode converter automaticamente um tipo de dado para outro quando necessário.
    // Por exemplo:
    let num = 5; // número
    let str = "10"; // string
    let result = num + str; // O JavaScript converte o número para string e concatena os dois valores
    console.log(result); // "510" (string)
    console.log(typeof result); // "string"
    Number("abc") // NaN (Not a Number)

    // Type Casting Explícita
    // Você pode converter um tipo de dado para outro usando funções de conversão.
    let num2 = 5;
    let str2 = "10";
    let result2 = num2 + Number(str2); // Convertendo a string para número antes de somar
    console.log(result2); // 15

// 🧠 Ideia simples
    // Transformar:
    //  "10" (string) → 10 (number)
    //   1 (number) → "1" (string)

// 🔥 Dica importante
// Sempre prefira conversão explícita, porque:
    //  evita bugs
    //  deixa o código mais claro