/* 



**Hoisting** em JavaScript é um comportamento em que **declarações de variáveis, funções e classes** são "elevadas" ao topo do escopo em que estão definidas (escopo global ou escopo de função) durante a fase de compilação, antes da execução do código.

### Como funciona:
1. **Variáveis (com `var`):**
   - As declarações de `var` são içadas, mas sua **atribuição** permanece na posição original. Até serem inicializadas, elas têm o valor `undefined`.
   ```javascript
   console.log(a); // undefined
   var a = 10;
   console.log(a); // 10
   ```

2. **Variáveis (com `let` e `const`):**
   - Elas também são içadas, mas ficam em um "estado temporalmente morto" até a linha de declaração. Acessá-las antes da declaração resulta em um erro de referência.
   ```javascript
   console.log(b); // ReferenceError
   let b = 20;
   ```

3. **Funções declaradas:**
   - As declarações de função completas são içadas, então você pode chamá-las antes de sua definição.
   ```javascript
   console.log(soma(2, 3)); // 5
   function soma(a, b) {
     return a + b;
   }
   ```

4. **Expressões de função e arrow functions:**
   - Apenas o identificador (variável) é içado, não a atribuição. Tentar chamá-las antes da inicialização resulta em erro.
   ```javascript
   console.log(multiplica); // undefined
   var multiplica = function (a, b) {
     return a
*/