# isLooselyEqual

O termo ``isLooselyEqual`` não faz parte da biblioteca padrão do JavaScript, <br>
mas é o nome de uma função utilitária extremamente famosa usada internamente por <br>
frameworks como o Vue.js e em diversas bibliotecas de utilitários.

Para entender o ``isLooselyEqual``, você precisa entender o problema que ele resolve: <br>
> a diferença entre Igualdade de Referência e Igualdade de Valor.

---

### Resumindo ``isLooselyEqual``

- O ``isLooselyEqual`` é a ferramenta que diz: <br>
"Estes dois objetos parecem iguais e contêm as mesmas coisas, então vou tratá-los como iguais", <br> 
ignorando o fato de serem instâncias diferentes na memória.