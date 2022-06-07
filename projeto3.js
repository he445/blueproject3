console.clear();
const prompt = require("prompt-sync")();
let ticTacToe = [[], [], []];
ticTacToe[2][2] = undefined;
let ticTacToeLayout = "";
let item;
let player1 = 0;
let player2 = 0;
let repete = "sim";

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

function displayItem(item) {
  return item === undefined ? " " : item;
}
displayItem();
updateLayout();
console.log(ticTacToeLayout);
function game() {
  for (let i = 1; i > 0; ) {
    console.log("selecione as rodadas");
    i = +prompt();
    let jogadas = 0;
    if (repete == "sim") {
      while (i > 0) {
        console.log(i);
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
          console.log(ticTacToe[0][0], "ganhou!");
          if (ticTacToe[0][0] == "x") {
            player1++;
            i--;
            console.log(i);
          } else if (ticTacToe[0][0] == "o") {
            player2++;
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[1][0] == ticTacToe[1][1] &&
          ticTacToe[1][1] == ticTacToe[1][2] &&
          ticTacToe[1][0] != undefined
        ) {
          console.log(ticTacToe[1][0], "ganhou!");
          if (ticTacToe[1][0] == "x") {
            player1++;
            i--;

            console.log(ticTacToe[0]);
          } else if (ticTacToe[1][0] == "o") {
            player2++;
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[2][0] == ticTacToe[2][1] &&
          ticTacToe[2][1] == ticTacToe[2][2] &&
          ticTacToe[2][0] != undefined
        ) {
          console.log(ticTacToe[2][0], "ganhou!");
          if (ticTacToe[2][0] == "x") {
            player1++;
            i--;
          } else if (ticTacToe[2][0] == "o") {
            player2++;
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[0][0] == ticTacToe[1][0] &&
          ticTacToe[1][0] == ticTacToe[2][0] &&
          ticTacToe[0][0] != undefined
        ) {
          console.log(ticTacToe[0][0], "ganhou!");
          if (ticTacToe[0][0] == "x") {
            player1++;
            i--;
          } else if (ticTacToe[0][0] == "o") {
            player2++;
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[0][1] == ticTacToe[1][1] &&
          ticTacToe[1][1] == ticTacToe[2][1] &&
          ticTacToe[0][1] != undefined
        ) {
          console.log(ticTacToe[0][1], "ganhou!");
          if (ticTacToe[0][1] == "x") {
            player1++;
            i--;

            console.log(ticTacToe[0]);
          } else if (ticTacToe[0][1] == "o") {
            player2++;
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[0][2] == ticTacToe[1][2] &&
          ticTacToe[1][2] == ticTacToe[2][2] &&
          ticTacToe[0][2] != undefined
        ) {
          console.log(ticTacToe[0][2], "ganhou!");
          if (ticTacToe[0][2] == "x") {
            player1++;
            i--;
          } else if (ticTacToe[0][2] == "o") {
            player2++;
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[2][0] == ticTacToe[1][1] &&
          ticTacToe[1][1] == ticTacToe[0][2] &&
          ticTacToe[2][0] != undefined
        ) {
          console.log(ticTacToe[2][0], "ganhou!"), (i = 0);
          if (ticTacToe[2][0] == "x") {
            player1++;
            i--;
          } else if (ticTacToe[2][0] == "o") {
            player2++;
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[2][2] == ticTacToe[1][1] &&
          ticTacToe[1][1] == ticTacToe[0][0] &&
          ticTacToe[2][2] != undefined
        ) {
          console.log(ticTacToe[2][2], "ganhou!");
          if (ticTacToe[2][2] == "x") {
            player1++;
            i--;
          } else if (ticTacToe[2][2] == "o") {
            player2++;
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (jogadas >= 9) {
          displayItem();
          updateLayout();
          console.log(ticTacToeLayout);
          console.log("Velha"), i--;
          ticTacToe = [[], [], []];
          jogadas = 0;
        }
      }
    }
    console.log("hahaha, isso foi divertido. Deseja jogar de novo?");
    repete = prompt();
    if (repete == "sim") {
      (i = 1), (player1 = 0), (player1 = 0);
    } else {
      console.log("ok, até mais");
    }
  }
}

game();
displayItem();
updateLayout();
console.log();
console.log(ticTacToeLayout);
