document.addEventListener('DOMContentLoaded', function () {
    const flecheHaut = document.querySelector('.Fhaut');
    const flecheDroite = document.querySelector('.Fdroite');
    const flecheBas = document.querySelector('.Fbas');
    const flecheGauche = document.querySelector('.Fgauche');
    window.buttonA = document.querySelector('.Ba');

    function removeSelectApp(){
        const appActuelle = document.querySelector('.select-app');
        if (appActuelle) appActuelle.classList.remove('select-app');
    }

    function addSelectApp(){
        const nouvelleApp = document.getElementById(`app${window.numAppSelect}`);
        if (nouvelleApp) nouvelleApp.classList.add('select-app');
    }

    flecheHaut.addEventListener('click', function () {
        if(window.initFinish && window.navigApp){
            removeSelectApp();
            window.numAppSelect = (window.numAppSelect + 4) % 8;
            addSelectApp();
            updateAppInfo(window.numAppSelect);
        }
    });

    flecheBas.addEventListener('click', function () {
        if (window.initFinish && window.navigApp){
            removeSelectApp()
            window.numAppSelect = (window.numAppSelect - 4 + 8) % 8;
            addSelectApp();
            updateAppInfo(window.numAppSelect);
        }
    });

    flecheGauche.addEventListener('click', function () {
        if (window.initFinish && window.navigApp){
            removeSelectApp()
            window.numAppSelect = (window.numAppSelect - 1 + 8) % 8;
            addSelectApp();
            updateAppInfo(window.numAppSelect);
        }
    });

    flecheDroite.addEventListener('click', function () {
        if (window.initFinish && window.navigApp){
            removeSelectApp()
            window.numAppSelect = (window.numAppSelect + 1) % 8;
            addSelectApp();
            updateAppInfo(window.numAppSelect);
        }
    });

    const appInfos = [
        { nom: "Information", image: "images/fiche-de-donnees.png"},
        { nom: "Profil", image: "images/utilisateur.png"},
        { nom: "", image: "" },
        { nom: "", image: "" },
        { nom: "UE 1", image: "images/livre.png" },
        { nom: "UE 4", image: "images/livre.png" },
        { nom: "", image: "" },
        { nom: "Github", image: "images/sociale.png" }
    ];

    function updateAppInfo(index) {
        const nomLabel = document.getElementById('nom-app');
        const logoImg = document.getElementById('info-img');

        const info = appInfos[index];
        if (info) {
            nomLabel.textContent = info.nom;
            logoImg.src = info.image;
            if (info.nom === "") {
                document.getElementById('label-action').textContent = '';
                document.getElementById('info-img').style.display = 'none';
            } else {
                document.getElementById('label-action').textContent = 'A - Ouvrir';
                document.getElementById('info-img').style.display = 'block';
            }
        }
    }

    for (let i = 0; i < 8; i++) {
        const app = document.getElementById(`app${i}`);
        app.addEventListener('click', function () {
            removeSelectApp();
            window.numAppSelect = i;
            addSelectApp();
            updateAppInfo(i);
        });
    }
});