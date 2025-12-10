function main() {
  let myEmail = "a@a.com"; // Inferência de tipo ímplicita, tipo de variável definido com base no primeiro valor inserido
  let myName: string = "Raphael";
  console.log(myEmail);
  console.log(myName);
}

main();
//  npx tsc src/index.ts = converte o arquivo .ts em .js (transpile)
//
