# 📋 TypedArrays

- 📌 O que é?
<p>
  são arrays especiais do JavaScript que armazenam dados <br>
  binários com tipo fixo.
</p>

- são usados principalmente para:
  <img width="276" height="200" alt="image" src="https://github.com/user-attachments/assets/4197559a-4d28-49d6-bd88-775336bc9792" />


- 🧠 Exemplo básico

```js

let arr = new Int8Array(3)
  // Só aceita números inteiros de 8 bits
  // Tem tamanho fixo
  // Usa memória contínua (mais rápido)
  // Trabalha diretamente com buffer binário
```

- 🔥 Diferença principal
1. ✅ Tipo fixo
2. ✅ Tamanho fixo
3. ✅ Mais performático
4. ❌ Não pode misturar tipos

- 🧠 Resumindo simples:
> " Typed Arrays são arrays de números com tipo fixo e <br>
tamanho fixo que trabalham direto na memória binária. "

- 🚀 Regra prática para lembrar
<p>
  Se você estiver: 
  
  - Fazendo app normal → usa Array <br>
  - Mexendo com performance, gráficos, áudio, arquivos → TypedArray
</p>
