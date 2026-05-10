// 3️⃣ Set
    // 📦 Armazena valores únicos.

    let set = new Set() // Criando um novo Set

    set.add("valor1") // Adicionando um valor ao Set
    set.add("valor2") // Adicionando outro valor ao Set
    set.add("valor1") // Tentativa de adicionar um valor já existente (será ignorado)

    console.log(set.size) // 2    Retorna o número de valores únicos no Set
    // Por que o Set tem apenas 2 valores?
        // porque quando usamos o Set ele pode fazer:
            // ✅ Não permite duplicados
            // ✅ Ótimo para remover valores repetidos

        // ✅ Armazena valores únicos
        // ✅ Mantém ordem de inserção
        // ✅ Tem .size
        // ✅ Métodos próprios (add, has, delete)

    // Como lembrar do Set?
        // Set = valores únicos / É iterável

    // 🔥 Exemplo real (tipo app)
    const usuarios = new Set();
      usuarios.add("Alice");
      usuarios.add("Bob");
      usuarios.add("Alice"); // Tentativa de adicionar um usuário já existente (será ignorada)