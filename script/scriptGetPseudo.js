let user = {};

let AddUser = () => {

    let pseudo = document.getElementById("pseudo").value
    user.pseudo = pseudo;
    user.winCount = 0;

    localStorage.setItem("user", JSON.stringify(user));
};
