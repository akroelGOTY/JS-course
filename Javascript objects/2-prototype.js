// Em Prototype no JavaScript, um prototype é um objeto que serve como base para outros objetos herdarem propriedades e métodos.

// 🧠 Ideia simples
// Todo objeto em JavaScript tem um “link escondido” para outro objeto:
// 👉 esse link é o protótipo

// 🧠 Exemplo prático
    const pessoa = {
        falar() {
            console.log("Oi!");
        }
    };

    const lucas = Object.create(pessoa);
    lucas.falar(); // Oi!

    // 👉 lucas não tem falar, mas herda de pessoa

// 🧪 Usando função construtora
    function Pessoa(nome) {
        this.nome = nome;
    }

    Pessoa.prototype.falar = function() {
        console.log("Meu nome é " + this.nome);
    };

    const user = new Pessoa("Lucas");
    user.falar();

// ⚡ Vantagem -> Economiza memória
// ❌ Errado (cria função toda hora)