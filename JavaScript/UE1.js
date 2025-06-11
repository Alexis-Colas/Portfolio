document.addEventListener('DOMContentLoaded', function () {

    function cachesEcran() {
        const ecrans = document.querySelectorAll('.estEcran');
        ecrans.forEach(ecran => {
            ecran.style.display = 'none'
        });
    }

    const projetUE1 = [
        {
            nom: 'Test0',
            description: 'blabla0',
            savoir: 'c1, c2, c4',
            image: 'images/livre.png'
        },
        {
            nom: 'Test1',
            description: 'blabla1',
            savoir: 'c1, c3, c4',
            image: 'images/utilisateur.png'
        },
        {
            nom: 'Test2',
            description: 'blabla2',
            savoir: 'c2, c3, c4',
            image: 'images/sociale.png'
        }
    ]

    const projetUE4 = [
        {
            nom: 'Test-1',
            description: 'blabla0',
            savoir: 'c1, c2, c4',
            image: 'images/livre.png'
        },
        {
            nom: 'Test-2',
            description: 'blabla1',
            savoir: 'c1, c3, c4',
            image: 'images/utilisateur.png'
        },
        {
            nom: 'Test-3',
            description: 'blabla2',
            savoir: 'c2, c3, c4',
            image: 'images/sociale.png'
        }
    ]

    function updateProjet(num){
        if(window.UE == 1){
            document.getElementById('projet-name').textContent = projetUE1[num].nom;
            document.getElementById('projet-description').textContent = projetUE1[num].description;
            document.getElementById('projet-savoir').textContent = projetUE1[num].savoir;
            document.getElementById('img-projet').src = projetUE1[num].image;
        } else if (window.UE == 4){
            document.getElementById('projet-name').textContent = projetUE4[num].nom;
            document.getElementById('projet-description').textContent = projetUE4[num].description;
            document.getElementById('projet-savoir').textContent = projetUE4[num].savoir;
            document.getElementById('img-projet').src = projetUE4[num].image;
        }
    }

    window.buttonA.addEventListener('click', function () {
        if (window.numAppSelect == 4 && window.initFinish) {

            cachesEcran();
            window.numProjetUe1 = 0;
            window.navigApp = false;
            window.UE = 1
            document.getElementById('UE1-projet-haut').style.display = 'flex';
            document.getElementById('UE1-projet-bas').style.display = 'flex';

            updateProjet(window.numProjetUe1);
        } else if (window.numAppSelect == 5 && window.initFinish) {

            cachesEcran();
            window.numProjetUe4 = 0;
            window.navigApp = false;
            window.UE = 4
            document.getElementById('UE1-projet-haut').style.display = 'flex';
            document.getElementById('UE1-projet-bas').style.display = 'flex';

            updateProjet(window.numProjetUe4);
        }
    });

    const flecheDroite = document.querySelector('.Fdroite');
    const flecheGauche = document.querySelector('.Fgauche');

    flecheGauche.addEventListener('click', function () {
        if (window.initFinish && !window.navigApp){
            if(window.UE == 1){
                window.numProjetUe1 = (window.numProjetUe1 - 1 + projetUE1.length) % projetUE1.length;
                updateProjet(window.numProjetUe1);
            } else if (window.UE == 4){
                window.numProjetUe4 = (window.numProjetUe4 - 1 + projetUE4.length) % projetUE4.length;
                updateProjet(window.numProjetUe4);
            }
        }
    });

    flecheDroite.addEventListener('click', function () {
        if (window.initFinish && !window.navigApp){
            if(window.UE == 1){
                window.numProjetUe1 = (window.numProjetUe1 + 1) % projetUE1.length;
                updateProjet(window.numProjetUe1);
            } else if (window.UE == 4){
                window.numProjetUe4 = (window.numProjetUe4 + 1) % projetUE4.length;
                updateProjet(window.numProjetUe4);
            }
        }
    });
});