function main() {
  let myEmail = "a@a.com"; // Inferência de tipo ímplicita, tipo de variável definido com base no primeiro valor inserido
  let myName: string = "Raphael";
  console.log(myEmail);
  console.log(myName);
}


// tsconfig - Define o comportamento do typescript
//npx tsc --init : cria o arquivo tsconfig
main();
//  npx tsc src/index.ts = converte o arquivo .ts em .js (transpile)

// Pacotes que roam node.js como node.ts
//tsx
// documentação do tsconfi