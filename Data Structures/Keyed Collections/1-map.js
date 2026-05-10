// 1️⃣ Map
  // É tipo um objeto melhorado.

    let map = new Map() // Criando um novo Map

    map.set("nome", "João") // Adicionando um par chave-valor ao Map
    map.set(123, "Número") // A chave pode ser de qualquer tipo, inclusive números
    map.set(true, "Boolean") // A chave pode ser de qualquer tipo, inclusive booleanos

      console.log(map.get("nome")) // João    Obtendo o valor associado à chave "nome"
      console.log(map.size) // 3    Retorna o número de pares chave-valor no Map (retorna o número de pares chave-valor presentes)
      console.log(map.has(123)) // true    Verifica se a chave 123 existe no Map
      map.delete(true) // Remove o par chave-valor com a chave true
      console.log(map.has(true)) // false    Verifica se a chave true ainda existe no Map

    // ✅ Aceita qualquer tipo como chave
    // ✅ Mantém ordem de inserção
    // ✅ Tem .size
    // ✅ Métodos próprios (set, get, has, delete):
      // .set - Adiciona ou atualiza um par chave-valor no Map.
      // .get - Retorna o valor associado a uma chave específica.
      // .has - Verifica se uma chave existe no Map.
      // .delete - Remove um par chave-valor do Map.