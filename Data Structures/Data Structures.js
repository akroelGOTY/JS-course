// Data Structures
 // são formas de organizar e armazenar dados pra você conseguir usar eles de maneira eficiente.

 // 🧠 Ideia simples
 // 👉 Data Structures = “como guardar e organizar dados”
 
 // Exemplo: lista de usuários, carrinho de compras, histórico de mensagens e etc.

 // 📋 Array (lista) -> 👉 guarda vários valores em ordem
    const numeros = [1, 2, 3];

 //📦 Object (objeto) -> 👉 guarda dados com chave + valor
    const user = {
        nome: "Lucas",
        idade: 16
    };

 // 🗂️ Map -> 👉 parecido com objeto, mas mais poderoso
    const mapa = new Map();
    mapa.set("nome", "Lucas");

 // 🧩 Set -> 👉 guarda uma lista de valores únicos e não permite valores repetidos
    const numeros = new Set([1, 2, 2, 3]);

 // ✨ Outras estruturas: Weakmap, WeakSet, TypedArrays, etc.

    // 🔥 Exemplo real (tipo app)
    const carrinho = [
      { produto: "Mouse", preco: 100 },
      { produto: "Teclado", preco: 200 },
      { produto: "Monitor", preco: 1000 }
    ];

 // 🧠 Por que usar Data Structures?
   // 👉 Eficiência: Ajudam a acessar e manipular dados de forma rápida.
   // 👉 Organização: Mantêm os dados organizados, facilitando a busca e a atualização.
   // 👉 Resolução de problemas: Permitem resolver problemas complexos de maneira mais simples.