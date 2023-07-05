let userdata = localStorage.getItem("user");
let user = {};
user = JSON.parse(userdata);
console.log(user);
let divScoreBoard = document.createElement("div");

divScoreBoard.id = "scoreBoard";

let pseudoP = document.createElement("p");
divScoreBoard.appendChild(pseudoP);
pseudoP.id = "pseudo";

let scoreP = document.createElement("p");
divScoreBoard.appendChild(scoreP);
scoreP.id ="score";

scoreP.innerHTML = user.winCount;
pseudoP.innerHTML = user.pseudo;
document.getElementById("main").appendChild(divScoreBoard);


// let score = localStorage.getItem("wincount");
// let scoreDiv = document.createElement("p");
// document.getElementById("main").appendChild(scoreDiv)
// scoreDiv.id = "score";
// document.getElementById("score").innerHTML = score;
