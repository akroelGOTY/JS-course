// 4️⃣ WeakSet
    // Versão fraca do Set.
    let weakSet = new WeakSet() // Criando um novo WeakSet

    let obj1 = { nome: "objeto1" }
    let obj2 = { nome: "objeto2" }

    weakSet.add(obj1) // Adicionando um objeto ao WeakSet
    weakSet.add(obj2) // Adicionando outro objeto ao WeakSet

    // 1. Só aceita objetos
    // 2. Não é iterável
    // 3. Permite garbage collection