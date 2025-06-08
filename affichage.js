document.addEventListener('DOMContentLoaded', function () {
    const flecheHaut = document.querySelector('.Fhaut');
    const flecheDroite = document.querySelector('.Fdroite');
    const flecheBas = document.querySelector('.Fbas');
    const flecheGauche = document.querySelector('.Fgauche');

    function removeSelectApp(){
        const appActuelle = document.querySelector('.select-app');
        if (appActuelle) appActuelle.classList.remove('select-app');
    }

    function addSelectApp(){
        const nouvelleApp = document.getElementById(`app${window.numAppSelect}`);
        if (nouvelleApp) nouvelleApp.classList.add('select-app');
    }

    flecheHaut.addEventListener('click', function () {
        removeSelectApp();
        window.numAppSelect = (window.numAppSelect + 4) % 8;
        addSelectApp();
    });

    flecheBas.addEventListener('click', function () {
        removeSelectApp()
        window.numAppSelect = (window.numAppSelect - 4 + 8) % 8;
        addSelectApp()
    });

    flecheGauche.addEventListener('click', function () {
        removeSelectApp()
        window.numAppSelect = (window.numAppSelect - 1 + 8) % 8;
        addSelectApp()
    });

    flecheDroite.addEventListener('click', function () {
        removeSelectApp()
        window.numAppSelect = (window.numAppSelect + 1) % 8;
        addSelectApp()
    });

    for (let i = 0; i < 8; i++) {
        const app = document.getElementById(`app${i}`);
        app.addEventListener('click', function () {
            removeSelectApp();
            window.numAppSelect = i;
            addSelectApp();
        });
    }
});