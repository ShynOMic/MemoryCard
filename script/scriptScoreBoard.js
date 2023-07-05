let pseudo = localStorage.getItem("pseudo");
let pseudoDiv = document.createElement("p");
document.getElementById("main").appendChild(pseudoDiv)
pseudoDiv.id = "pseudo";
document.getElementById("pseudo").innerHTML = pseudo;

let score = localStorage.getItem("wincount");
let scoreDiv = document.createElement("p");
document.getElementById("main").appendChild(scoreDiv)
scoreDiv.id = "score";
document.getElementById("score").innerHTML = score;
