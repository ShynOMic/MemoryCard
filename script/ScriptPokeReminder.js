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

let createBalise = () => {
    let allIndex = []

    for(let key in CartesPokemon){
        allIndex.push(key,key)
    }

    shuffleArray(allIndex)

    for (let key of allIndex) {

        let madiv = document.createElement("div");
        let img = document.createElement("img");
        img.src = CartesPokemon[key];
        img.id = key.toString()

        img.addEventListener("click",() => {
            cardComparator(img.id);
        })

        madiv.appendChild(img);
        document.getElementById("jeu").appendChild(madiv);
    }
}
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
let carteRetournee = null;
let carteCliquee = 0;

let cardComparator = (index) => {
    let img = document.getElementById(index);

    if(carteRetournee === null && !img.classList.contains("retournee")){
        img.classList.add("retournee");
        carteRetournee = img;

        carteCliquee++;

        if(carteCliquee === 2){
            if(carteRetournee.id === img.id){
                console.log("ca marche : ")
            }
            else{
                console.log("ca marche pas")
            }
        }
    }
}



createBalise();



