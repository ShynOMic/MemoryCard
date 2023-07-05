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
let indexCarteCliquer = null
let imgcartecliquer;

let createBalise = () => {
    let allIndex = []

    for(let key in CartesPokemon){
        allIndex.push(key,key)
    }

    shuffleArray(allIndex)

    allIndex.forEach((key, index) => {
        console.log(index)
        let divCard = document.createElement("div");
        divCard.classList.add("card")
        
        let divFront = document.createElement("div");
        divFront.classList.add("side")
        divFront.classList.add("side--front");
        let img = document.createElement("img");
        img.classList = ('card-front-img')

        let divBack= document.createElement("div");
        divBack.classList.add("side")
        divBack.classList.add("side--back");
        let img2 = document.createElement("img")
        img2.classList.add("card-back-img")
        img2.src = "../img/dosDeCartesPokemon.jpg"
        

        divCard.addEventListener("click",() => {
            img2.src = CartesPokemon[key];
            console.log("click")
            if(!carteCliquer){
                imgcartecliquer = img2
                carteCliquer = key;
                Carte = index;
            }
            else if(carteCliquer){
                document.querySelector("#jeu").style.pointerEvents = 'none';
                setTimeout(() => {
                    document.querySelector("#jeu").style.pointerEvents = 'auto';
                }, 500);
                if(Carte===index){
                    console.log("C'est la même abriti");
                     // vérifie si la carte cliquer la seconde fois n'est pas exactement la même à la même position
                    return
                }
                if(!cardComparator(key)){
                    setTimeout(() => {
                        img2.src="../img/dosDeCartesPokemon.jpg"
                        imgcartecliquer.src="../img/dosDeCartesPokemon.jpg"
                    }, 500);
                }
                carteCliquer = null;
                Carte = null;
            }
            verifWin();
        })

        divBack.appendChild(img2);
        divCard.appendChild(divFront);
        divCard.appendChild(divBack);
        document.getElementById("jeu").appendChild(divCard);
    })
}

const shuffleArray = (array) => { // mélange le tablau
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

let cardComparator = (key) => {
    console.log("compare")
    
    if(!carteTrouver.includes(carteCliquer)){
        if(carteCliquer === key){//vérifie si la première image cliquer possède la même source que la seconde image cliqué 
            console.log("ca marche : ");
            carteTrouver.push(key);
            carteTrouver.push(carteCliquer);
            console.log(carteTrouver);
            return true
        }
        else{
            console.log("ca marche pas");
            carteCliquer = null;//vide les cartes retourné si ce ne sont pas les mêmes
            return false;
            }
    } 
    return true;
}     
let wincount;
let verifWin = () => {
    if(carteTrouver.length===16){
        wincount++;
        localStorage.setItem("wincount",wincount);
        document.location.href="../page/ScoreBoard.html"
        return true;
    }
    return false;
}


createBalise();
