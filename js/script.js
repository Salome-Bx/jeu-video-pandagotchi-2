

//*****SCORE*****
// incrémente le score global (aussi = à temps écoulé)

let compteurScoreGlobal = 0;
let intervalIncrementationScoreGlobal = setInterval(() => {
  let affichageScoreGlobal = (divScoreGlobal.innerHTML =
    "Votre score est de : " + compteurScoreGlobal);
  // console.log(compteurScoreGlobal);
  compteurScoreGlobal++;
  if (compteurScoreGlobal > 100) {
    clearInterval(intervalIncrementationScoreGlobal); // Arrête le compteur à 100
    alert("Bravo !");
  }
}, 1000);// la fonction se met en route toute les secondes
console.log(compteurScoreGlobal + "kk")



//Sélection des éléments du DOM
//boutons
let btnNomPanda = document.querySelector(".btnNomPanda");
let btnNourriture = document.querySelector(".btnNourriture");
let btnSommeil = document.querySelector(".btnSommeil");
let btnJeu = document.querySelector(".btnJeu");

// jauges
let jaugeNourriture = document.querySelector(".jaugeNourriture");
let jaugeSommeil = document.querySelector(".jaugeSommeil");
let jaugeJeu = document.querySelector(".jaugeJeu");

// scores
let divScoreGlobal = document.querySelector(".affichageScoreGlobal");
let spanScoreNourriture = document.querySelector(".scoreNourriture");
let spanScoreSommeil = document.querySelector(".scoreSommeil");
let spanScoreJeu = document.querySelector(".scoreJeu");

// pop up choix nom
let popUpNomPanda = document.querySelector(".nomPanda");


//****POP UP****
//Pop up choisir le nom du panda
btnNomPanda.addEventListener("click", () => {
  afficherNomPanda();
  popUpNomPanda.classList.add("cache");
  decrementationJauges();
});

//Récupérer et afficher le nom du panda
function afficherNomPanda() {
  let inputNomPanda = document.getElementById("inputNomPanda");
  let divAffichageNom = document.querySelector(".affichageNom");
  let nomEntre = inputNomPanda.value;
  // console.log(nomEntre);
  divAffichageNom.innerText = nomEntre;
}


//*****CHANGEMENT IMAGES AU CLIC BOUTON ******/
// Appels classe Panda pour changement image au clic des boutons Nourrir/Dormir/Jouer
let pandaAnimNourriture = new Panda("imgPandaNourriture")
let pandaAnimSommeil = new Panda("imgPandaSommeil")
let pandaAnimJeu = new Panda("imgPandaJeu")
let accessoireAnimNourriture = new Panda("imgBambou")
let accessoireAnimSommeil = new Panda("imgZ")
let accessoireAnimJeu = new Panda("imgBallon")


// Ecouteurs d'evenement sur les boutons Nourrir/Dormir/Jouer
// Actions changer d'images
btnNourriture.addEventListener("click", () => {
  pandaAnimNourriture.changerImgPanda();
  accessoireAnimNourriture.changerImgAccessoire();

});
btnSommeil.addEventListener("click", () => {
  pandaAnimSommeil.changerImgPanda();
  accessoireAnimSommeil.changerImgAccessoire();
});
btnJeu.addEventListener("click", () => {
  pandaAnimJeu.changerImgPanda();
  accessoireAnimJeu.changerImgAccessoire();

});






//*****INCREMENTATION JAUGES ******/
// Action incrementation bouton Nourriture
btnNourriture.addEventListener("click", () => {

  console.log("valeur nourriture =" + jaugeNourriture.value)
  if (jaugeNourriture.value <= 97 && jaugeNourriture.value >= 0) {
    jaugeNourriture.value += 30;

  } else if (jaugeNourriture.value > 95 && jaugeNourriture.value < 100) {
    jaugeNourriture.value = 100;
  }

});
// Action incrementation bouton Jeu
btnJeu.addEventListener("click", () => {
  // console.log("valeur jeu =" + value)
  if (jaugeJeu.value <= 97 && jaugeJeu.value >= 0) {
    jaugeJeu.value = jaugeJeu.value + 30;
    // console.log("valeur jeu =" + jaugeJeu.value)
  } else if (jaugeJeu.value > 95 && jaugeJeu.value < 100) {
    jaugeJeu.value = 100;
  }
});

// Action incrementation bouton Sommeil
btnSommeil.addEventListener("click", () => {
  if (jaugeSommeil.value <= 97 && jaugeSommeil.value >= 0) {
    jaugeSommeil.value += 15;
  } else if (jaugeSommeil.value > 95 && jaugeSommeil.value < 100) {
    jaugeSommeil.value = 100;
  }

});

//*****DECREMENTATION JAUGES ******/
function decrementationJauges() {

  let intervalDecrementationJaugeDormir = setInterval(() => {

    console.log(jaugeNourriture.value)

    if (compteurScoreGlobal > 20) {
      jaugeNourriture.value -= 20
      jaugeSommeil.value -= 20;
      jaugeJeu.value -= 20;
      // console.log("supérieur a vingt")

    } else if (compteurScoreGlobal < 4) {
      // document.querySelector(".jaugeNourriture").value = pourcentageJaugeNourriture;
      document.querySelector(".jaugeSommeil").value = jaugeSommeil.value;
      document.querySelector(".jaugeJeu").value = jaugeJeu.value;
      jaugeNourriture.value -= 3
      jaugeSommeil.value -= 3;
      jaugeJeu.value -= 3;
      // console.log("inferieur a 8")

    } else {
      // document.querySelector(".jaugeNourriture").value = pourcentageJaugeNourriture;
      document.querySelector(".jaugeSommeil").value = jaugeSommeil.value;
      document.querySelector(".jaugeJeu").value = jaugeJeu.value;
      jaugeNourriture.value -= 6;
      jaugeSommeil.value -= 6;
      jaugeJeu.value -= 6;
      // console.log("entre 8 et 20")


    } if (jaugeSommeil.value <= 0 || jaugeNourriture.value <= 0) {
      let imgPanda = document.getElementById("panda");
      imgPanda.classList.add("cache");
      alert("Ton panda est mort");
      clearInterval(intervalDecrementationJaugeDormir); // Arrête le compteur à 0
    }
  }, 1000); // la fonction se met en route toutes les secondes
}




