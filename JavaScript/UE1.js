document.addEventListener('DOMContentLoaded', function () {

    function cachesEcran() {
        const ecrans = document.querySelectorAll('.estEcran');
        ecrans.forEach(ecran => {
            ecran.style.display = 'none'
        });
    }

    const projetUE1 = [
        {
            nom: 'Quixo Decider',
            description: 'DDurant un projet où l\'on devait programmer un jeu de société (Quixo), nous avons dû développer une IA' +
                         ' contre laquelle on pouvait jouer. Le but était de réfléchir à une stratégie et de l\'implémenter.' +
                         ' La stratégie développée consiste à vérifier si l\'adversaire a un alignement de 3 dés.' +
                         'Si c’est le cas, alors l\'IA bloque cet alignement. Sinon, elle joue aléatoirement parmi les destinations possibles. ',
            savoir: 'Transposer une situation/problème complexe en un programme<br>' +
                    'Implémenter une stratégie d\'IA',
            image: 'images/QuixoDecider.mp4'
        },
        {
            nom: 'pas fini',
            description: 'pas fini',
            savoir: 'pas fini',
            image: ''
        },
        {
            nom: 'pas fini',
            description: 'pas fini',
            savoir: 'pas fini',
            image: ''
        }
    ]

    const projetUE4 = [
        {
            nom: 'MCD Trida',
            description: 'Durant ce projet nous avons dû réaliser un MCD, ce qui permet de représenter une situation' +
                         ' sous forme graphique et de créer la base de données. Cela permet de faciliter la recherche' +
                         ' et la manipulation de la base de données',
            savoir: 'Traduire une situation en un modèle MCD<br>' +
                    'Savoir faire un MCD',
            image: 'images/MCD_trida.png'
        },
        {
            nom: 'pas fini',
            description: 'pas fini',
            savoir: 'pas fini',
            image: ''
        },
        {
            nom: 'pas fini',
            description: 'pas fini',
            savoir: 'pas fini',
            image: ''
        }
    ]

    function updateProjet(num){
        if(window.UE == 1){
            document.getElementById('projet-name').textContent = projetUE1[num].nom;
            document.getElementById('projet-description').textContent = projetUE1[num].description;
            document.getElementById('projet-savoir').innerHTML = projetUE1[num].savoir;
            if(num == 0){
                document.getElementById('video-projet').style.display = 'block';
                document.getElementById('img-projet').style.display = 'none';
                document.getElementById('video-projet').src = projetUE1[num].image;
            }else{
                document.getElementById('video-projet').style.display = 'none';
                document.getElementById('img-projet').style.display = 'block';
                document.getElementById('img-projet').src = projetUE1[num].image;
            }
        } else if (window.UE == 4){
            document.getElementById('projet-name').textContent = projetUE4[num].nom;
            document.getElementById('projet-description').textContent = projetUE4[num].description;
            document.getElementById('projet-savoir').innerHTML = projetUE4[num].savoir;
            if(num == 5){
                document.getElementById('video-projet').style.display = 'block';
                document.getElementById('img-projet').style.display = 'none';
                document.getElementById('video-projet').src = projetUE4[num].image;
            }else{
                document.getElementById('video-projet').style.display = 'none';
                document.getElementById('img-projet').style.display = 'block';
                document.getElementById('img-projet').src = projetUE4[num].image;
            }
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