let user = {} 

let AddUser = () => {
    user.Pseudo = document.getElementById("pseudo").value
    localStorage.setItem("PseudoJSON", JSON.stringify(user))
}
