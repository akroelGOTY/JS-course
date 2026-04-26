// Em Built-in Objects no JavaScript, são objetos que já vêm prontos na linguagem — você não precisa criar do zero.
// 🔄 Exemplos de Built-in Objects: String, Number, Array, Object, Math, Date, etc.

// 🧠 Ideia simples
// São tipo “ferramentas nativas” do JavaScript 🧰

    // 🔤 String
    let nome = "lucas";

    console.log(nome.toUpperCase()); // LUCAS
    console.log(nome.length); // 5 letras

    // 🔢 Number
    let n = 10.456;
    console.log(n.toFixed(2)); // 10.46

    // 📅 Array
    let lista = [1, 2, 3];

    lista.push(4);
    console.log(lista); // [1,2,3,4]

    // 🧩 Object
    let obj = { nome: "Lucas" };
    console.log(Object.keys(obj)); // ["nome"]

    // 🕒 Date
    let agora = new Date();
    console.log(agora.getFullYear());

    // 🔢 Math
    console.log(Math.random()); // número aleatório
    console.log(Math.floor(4.7)); // 4

    // ❗JSON
    let json = '{"nome":"Lucas"}';
    let obj = JSON.parse(json);
    console.log(obj.nome); // Lucas

// ⚡ Outros importantes
    // RegExp (Expressões Regulares)
    // Promise (para lidar com operações assíncronas)
    // Map e Set (estruturas de dados avançadas)
    // Boolean (para valores true/false)

// 🔥 Dica importante
// Conhecer os Built-in Objects é essencial para aproveitar ao máximo o poder do JavaScript e escrever código eficiente e limpo.