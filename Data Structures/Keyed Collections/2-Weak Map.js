// 2️⃣  WeakMap
  // Parecido com Map, MAS:
    // Só aceita objetos como chave
    // Não impede garbage collection
    // Não pode ser iterado

    let wm = new WeakMap() // Criando um novo WeakMap

    let obj = {} // Criando um objeto para usar como chave
    wm.set(obj, "dados") // Adicionando um par chave-valor ao WeakMap usando o objeto como chave

    obj = null // pode ser removido da memória
    console.log(wm.get(obj)) // undefined, O objeto foi coletado pelo garbage collector, então a chave não existe mais

  // Usado para: (Dados privados e cache temporário)