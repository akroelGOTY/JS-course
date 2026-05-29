// Vamos apronfundar sobre o isLooselyEqual.

// 1. O Problema: Por que o "===" falha com Objetos?
  // quando comparamos tipos primitivos (string, number, boolean), comparamos o valor:
  1 === 1 // true
  "A" === "A" // true

  // Mas quando comparamos Objetos ou Arrays, o JavaScript compara a referência na memória:
    const a = { nome: "Maria" };
    const b = { nome: "Maria" };

    console.log(a === b); // false!

  // Mesmo que o conteúdo seja idêntico,
  // o JS diz que são diferentes porque eles moram em "endereços" diferentes na memória do computador.
    // O isLooselyEqual serve para dizer: 
    // "Eu não me importo se estão em lugares diferentes da memória; eu quero saber se o que tem dentro deles é a mesma coisa".

// 2. O que o isLooselyEqual faz exatamente?
  // Ele realiza uma Comparação Profunda (Deep Comparison).
  // Ele entra "dentro" dos objetos e arrays e compara cada propriedade, uma por uma, de forma recursiva.
    // O fluxo lógico dele geralmente é assim:
      // 1️⃣ Identidade Estrita: Se a === b, retorna true imediatamente.
      // 2️⃣ Datas: Se forem objetos do tipo Date, ele compara o tempo (milissegundos).
      // 3️⃣ Arrays:
        // -> Têm o mesmo tamanho? Se não, false.
        // -> Cada item de a é igual ao item de b (chamando a si mesmo recursivamente)?
      // 4️⃣ Objetos:
        //  -> Têm o mesmo número de chaves?
        //  -> As chaves são as mesmas?
        //  -> Os valores de cada chave são iguais (chamando a si mesmo recursivamente)?
        // 5️⃣ Caso contrário: Retorna false.

// 3. Exemplo de Implementação
  // Para você entender a "mágica", veja como essa função costuma ser escrita:

  function isLooselyEqual(a, b) {
    // 1. Se forem exatamente a mesma referência
    if (a === b) return true;

  const isObjectA = a !== null && typeof a === 'object';  // Verifica se a é um objeto (e não é null)
  const isObjectB = b !== null && typeof b === 'object';  // Verifica se b é um objeto (e não é null)

  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a);  // Verifica se a é um Array
      const isArrayB = Array.isArray(b);  // Verifica se b é um Array

      if (isArrayA && isArrayB) {
        // Comparação de Arrays
        return a.length === b.length && a.every((e, i) => isLooselyEqual(e, b[i]));  // Verifica se os arrays têm o mesmo tamanho e se cada elemento é igual
      } else if (a instanceof Date && b instanceof Date) { 
        // Comparação de Datas
        return a.getTime() === b.getTime();
        } else if (!isArrayA && !isArrayB) {
            // Comparação de Objetos
            const keysA = Object.keys(a);
            const keysB = Object.keys(b);
            return keysA.length === keysB.length && keysA.every(key => isLooselyEqual(a[key], b[key]));
            } else {
                return false;
            }
          } catch (e) {
            return false;
          }
        } else {
            // Se um é objeto e o outro não, ou se são primitivos diferentes
            return String(a) === String(b);
        }
    }

// 4. Exemplos de Uso

  const obj1 = { user: { id: 1, tags: [1, 2] } };
  const obj2 = { user: { id: 1, tags: [1, 2] } };

  console.log(obj1 === obj2);              // false (referências diferentes)
  console.log(isLooselyEqual(obj1, obj2)); // true  (conteúdo igual)

  const arr1 = [1, 2, { x: 0 }];
  const arr2 = [1, 2, { x: 0 }];
  console.log(isLooselyEqual(arr1, arr2)); // true

  // 5. Quando usar o isLooselyEqual?
    // Use quando você precisa comparar o conteúdo de objetos ou arrays, e não se eles são a mesma referência.
    // É especialmente útil em testes, onde queremos verificar se a estrutura de dados é a mesma, independentemente de onde ela esteja na memória.