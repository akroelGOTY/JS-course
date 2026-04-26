// Em Prototypal Inheritance no JavaScript, é o jeito que objetos herdam características de outros objetos.

 // 🧠 Ideia simples
 // Em vez de “classes” tradicionais, o JavaScript usa objetos que servem de base para outros.
 // 👉 Um objeto pode pegar propriedades e métodos de outro objeto através do protótipo.

    const animal = {
        falar() {
            console.log("Faz algum som");
        }
    };

    const cachorro = Object.create(animal);
    cachorro.falar(); // Faz algum som

    //cachorro não tem falar, mas ele herda do animal via protótipo

//  🔗 Como funciona por baixo
//  Todo objeto tem uma ligação interna chamada:
//  👉 [[Prototype]] (ou __proto__)

    //O JavaScript procura assim:
        // 1. Existe em cachorro? ❌
        // 2. Procura no protótipo (animal) ✔️

    const usuario = {
        tipo: "comum"
    };

    const admin = Object.create(usuario);
    admin.nome = "Lucas";

    console.log(admin.tipo); // comum (herdado)