// O que são Keyed Collections ?
  // são estruturas de dados baseadas em chave → valor
  // são usadas para armazenar e organizar dados de forma eficiente
  // exemplos comuns: Map, Set, WeakMap, WeakSet

  // -> 🧠 Por que existem?
    // Antes delas, a gente só tinha:
      let obj = {}

    // Mas isso tem limitações:
      // 1. Só aceitam string ou Symbol como chave
      // 2. Não mantêm controle claro de tamanho
      // 3. Não são ideais para certos casos de performance
    // -> Então criaram coleções próprias para isso.
    
    // Vamos conhecer algumas (Map, Set, WeakMap, WeakSet) e suas características