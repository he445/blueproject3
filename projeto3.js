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
  let jogadas = 0;
  while (i >= 1) {
    jogadas++;
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
    if (selecao == "2a x" && ticTacToe[1][0] == undefined) {
      (ticTacToe[1][0] = "x"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }
    if (selecao == "2a o" && ticTacToe[1][0] == undefined) {
      (ticTacToe[1][0] = "o"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }

    if (selecao == "2b x" && ticTacToe[1][1] == undefined) {
      (ticTacToe[1][1] = "x"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }
    if (selecao == "2b o" && ticTacToe[1][1] == undefined) {
      (ticTacToe[1][1] = "o"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }
    if (selecao == "2c x" && ticTacToe[1][2] == undefined) {
      (ticTacToe[1][2] = "x"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }
    if (selecao == "2c o" && ticTacToe[1][2] == undefined) {
      (ticTacToe[1][2] = "o"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }
    if (selecao == "3a x" && ticTacToe[2][0] == undefined) {
      (ticTacToe[2][0] = "x"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }
    if (selecao == "3a o" && ticTacToe[2][0] == undefined) {
      (ticTacToe[2][0] = "o"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }

    if (selecao == "3b x" && ticTacToe[2][1] == undefined) {
      (ticTacToe[2][1] = "x"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }
    if (selecao == "3b o" && ticTacToe[2][1] == undefined) {
      (ticTacToe[2][1] = "o"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }
    if (selecao == "3c x" && ticTacToe[2][2] == undefined) {
      (ticTacToe[2][2] = "x"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }
    if (selecao == "3c o" && ticTacToe[2][2] == undefined) {
      (ticTacToe[2][2] = "o"), displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
    }

    if (
      ticTacToe[0][0] == ticTacToe[0][1] &&
      ticTacToe[0][1] == ticTacToe[0][2] &&
      ticTacToe[0][0] != undefined
    ) {
      console.log(ticTacToe[0][0], "ganhou!"), (i = 0);
    } else if (
      ticTacToe[1][0] == ticTacToe[1][1] &&
      ticTacToe[1][1] == ticTacToe[1][2] &&
      ticTacToe[1][0] != undefined
    ) {
      console.log(ticTacToe[1][0], "ganhou!"), (i = 0);
    } else if (
      ticTacToe[2][0] == ticTacToe[2][1] &&
      ticTacToe[2][1] == ticTacToe[2][2] &&
      ticTacToe[2][0] != undefined
    ) {
      console.log(ticTacToe[2][0], "ganhou!"), (i = 0);
    } else if (
      ticTacToe[0][0] == ticTacToe[1][0] &&
      ticTacToe[1][0] == ticTacToe[2][0] &&
      ticTacToe[0][0] != undefined
    ) {
      console.log(ticTacToe[0][0], "ganhou!"), (i = 0);
    } else if (
      ticTacToe[0][1] == ticTacToe[1][1] &&
      ticTacToe[1][1] == ticTacToe[2][1] &&
      ticTacToe[0][1] != undefined
    ) {
      console.log(ticTacToe[0][1], "ganhou!"), (i = 0);
    } else if (
      ticTacToe[0][2] == ticTacToe[1][2] &&
      ticTacToe[1][2] == ticTacToe[2][2] &&
      ticTacToe[0][2] != undefined
    ) {
      console.log(ticTacToe[0][2], "ganhou!"), (i = 0);
    } else if (
      ticTacToe[2][0] == ticTacToe[1][1] &&
      ticTacToe[1][1] == ticTacToe[0][2] &&
      ticTacToe[2][0] != undefined
    ) {
      console.log(ticTacToe[2][0], "ganhou!"), (i = 0);
    } else if (
      ticTacToe[2][2] == ticTacToe[1][1] &&
      ticTacToe[1][1] == ticTacToe[0][0] &&
      ticTacToe[2][0] != undefined
    ) {
      console.log(ticTacToe[2][2], "ganhou!"), (i = 0);
    } else if (jogadas >= 9) {
      displayItem();
      updateLayout();
      console.log(ticTacToeLayout);
      console.log("Velha"), (i = 0);
    }
  }
}

game();
displayItem();
updateLayout();

console.log(ticTacToeLayout);
