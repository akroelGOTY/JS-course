// Operadores lógicos

    /*
    servem para unir duas ou mais
    comparações, o final também é
    em Boolean
    */
   
   // && - AND -true apenas se os dois forem verdadeiros
   // || - OR - para ser trueum lado como true é suficiente
   // ! - NOT - este operador inverte a comparação

// exemplos:
    console.log(true && true) // !true -> false
    console.log(true && false) // !true -> false
    console.log(5 > 2 && 3 > 2) // !true -> false
    console.log(1 < 5 && "lucas" === 1) // !true -> false
    console.log(1 < 5 || "lucas" === 1) // !true -> false
    console.log(5 > 2 || 3 > 22) // !true -> false
    console.log(!true)  // !true -> false
    console.log(!5 < 2) // !5 < 2 -> !false -> true