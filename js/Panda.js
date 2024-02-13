class Panda {
    constructor(image) {
        this.image = image;

    }
    get panda() {
        return document.querySelector("#panda");
    }

    get accessoire() {
        return document.querySelector("#accessoire");
    }


    changerImgPanda() {
        this.panda.classList.replace('panda', this.image);

        setTimeout(() => {
            this.revenirNormal();
        }, 2000)
    }


    changerImgAccessoire() {
        this.accessoire.classList.add('accessoire', this.image);

        setTimeout(() => {
            this.disparaitre();
        }, 2000)
    }



    revenirNormal() {
        this.panda.classList.add("panda");
        this.panda.classList.remove("imgPandaNourriture");
        this.panda.classList.remove("imgPandaSommeil");
        this.panda.classList.remove("imgPandaJeu");
    }

    disparaitre() {

        this.accessoire.classList.remove("imgBambou");
        this.accessoire.classList.remove("imgZ");
        this.accessoire.classList.remove("imgBallon");
    }


}


