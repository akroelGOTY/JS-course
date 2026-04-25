// Estrutura de controle
// if / else / else if 

    // if - se a condição for verdadeira, o código dentro do bloco é executado (se)
    // else - se a condição for falsa, o código dentro do bloco é executado (senão)
    // else if - se a primeira condição for falsa, verifica outra condição (se não, se)

// Exemplo usando if
    const salario = 1855;
    if (salario < 2000) {
        console.log("seu salario deve ser aumentado!");
    }

// Exemplo usando if / else
    if (salario > 1900) {
        console.log("seu salario é mt alto !");
    } else {
        console.log("seu salario é mt baixo !");
    }

// Exemplo usando if / else if / else
    if (salario > 2000) {
        console.log("seu salario é mt alto !");
    } else if (salario < 1900) {
        console.log("seu salario é mt baixo !");
    } else {
        console.log("seu salario é mt bom !");
    }  
