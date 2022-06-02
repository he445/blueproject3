console.clear();
const prompt = require("prompt-sync")();
let ticTacToe = [[], [], []];
ticTacToe[2][2] = undefined;
let ticTacToeLayout = "";
let i = 1;
let item;
function updateLayout() {
  ticTacToeLayout = `${displayItem(ticTacToe[0][0])} | ${displayItem(
    ticTacToe[0][1]
  )} | ${displayItem(ticTacToe[0][2])}
---------
${displayItem(ticTacToe[1][0])} | ${displayItem(
    ticTacToe[1][1]
  )} | ${displayItem(ticTacToe[1][2])}
---------
${displayItem(ticTacToe[2][0])} | ${displayItem(
    ticTacToe[2][1]
  )} | ${displayItem(ticTacToe[2][2])}`;
}
//[0][0]=1a
//[0][1]=1b
//[0][2]=1c
//[1][0]=2a
//[1][1]=2b
//[1][2]=2c
//[2][0]=3a
//[2][1]=3b
//[2][2]=3c
function displayItem(item) {
  return item === undefined ? " " : item;
}
displayItem();
updateLayout();
console.log(ticTacToeLayout);
function game() {
  while (i >= 1) {
    console.log(`selecione a linha e a coluna, sendo de 1 a 3 para colunas, de A a c para linas e x ou o
      ex: 1a x`);
    selecao = prompt();

    if (selecao == "1a x" && ticTacToe[0][0] == undefined) {
      (ticTacToe[0][0] = "x"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }
    if (selecao == "1a o" && ticTacToe[0][0] == undefined) {
      (ticTacToe[0][0] = "o"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }

    if (selecao == "1b x" && ticTacToe[0][1] == undefined) {
      (ticTacToe[0][1] = "x"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }
    if (selecao == "1b o" && ticTacToe[0][1] == undefined) {
      (ticTacToe[0][1] = "o"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }

    if (selecao == "1c x" && ticTacToe[0][2] == undefined) {
      (ticTacToe[0][2] = "x"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }
    if (selecao == "1c o" && ticTacToe[0][2] == undefined) {
      (ticTacToe[0][2] = "o"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }

    if (
      ticTacToe[0][0] == ticTacToe[0][1] &&
      ticTacToe[0][1] == ticTacToe[0][2] &&
      ticTacToe[0][0] != undefined
    ) {
      console.log(ticTacToe[0][0], "ganhou!"), (i = 0);
    }
  }
}

game();
displayItem();
updateLayout();

console.log(ticTacToeLayout);
