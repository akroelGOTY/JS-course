// Strutured data - JSON (JavaScript Object Notation)
 // é um formato de texto usado para armazenar e trocar dados.
 // Ele parece um objeto JavaScript, mas é só texto.

    // 🧠 Exemplo simples
    const pessoa = {
    nome: "Alice",
    idade: 30,
    cidade: "São Paulo"
    };

    // 🔄 Converter entre JSON e objeto
    const jsonString = JSON.stringify(pessoa);
    console.log(jsonString); // {"nome":"Alice","idade":30,"cidade":"São Paulo"}

    // 📦 Onde JSON é usado?
        // APIs
        // Banco de dados
        // Arquivos de configuração
        // Comunicação entre frontend e backend
        // LocalStorage
        // Web requests (fetch)

    // ⚠️ Regras importantes do JSON
    // ✅ Chaves devem ter aspas duplas
    // ✅ Strings devem ter aspas duplas
    // ✅ Pode ter: string, number, boolean, null, array, objeto
    // ❌ Não pode ter: funções, undefined, símbolos, comentários e trailing commas

    
    // 🧑‍💻 Exemplo real:
    fetch("/api")
      .then(res => res.json())
      .then(data => console.log(data))