let CartesPokemon = {
    0: "../img/dracoloss.png",
    1: "../img/Miaouss.png",
    2: "../img/Moustillon.png",
    3: "../img/nymphalix.png",
    4: "../img/Pika.png",
    5: "../img/Pirolli.png",
    6: "../img/raykwaza.png",
    7: "../img/zarbi.png",
};
let carteTrouver = [];
let carteCliquer = null
let createBalise = () => {
    let allIndex = []

    for(let key in CartesPokemon){
        allIndex.push(key,key)
    }

    shuffleArray(allIndex)

    for (let key of allIndex) {

        let madiv = document.createElement("div");
        madiv.classList.add("card")
        let img2 = document.createElement("img")
        img2.classList.add("card-back")
        img2.src = "../img/dosDeCartesPokemon.jpg"
        let img = document.createElement("img");
        img.classList = ('card-front')
        img.src = CartesPokemon[key];

        img.addEventListener("click",() => {
            if(!carteCliquer){
                carteCliquer = img;
            }
            else if(carteCliquer){
                cardComparator(img);
                carteCliquer = null;
            }
            verifWin();
        })

        madiv.appendChild(img);
        madiv.appendChild(img2);
        document.getElementById("jeu").appendChild(madiv);
    }
}
const shuffleArray = (array) => { // mélange le tablau
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

let cardComparator = (img) => {
    if(carteCliquer===img){ // vérifie si la carte cliquer la seconde fois n'est pas exactement la même à la même position
        return
    }
    if(!carteTrouver.includes(carteCliquer)){
        if(carteCliquer.src === img.src){//vérifie si la première image cliquer possède la même source que la seconde image cliqué 
            console.log("ca marche : ");
            carteTrouver.push(img);
            carteTrouver.push(carteCliquer);
            console.log(carteTrouver);
        }
        else{
            console.log("ca marche pas");
            carteCliquer = null;//vide les cartes retourné si ce ne sont pas les mêmes
            }
    } 
}        

let verifWin = () => {
    if(carteTrouver.length===16){
        console.log("win")
    }
}


createBalise();