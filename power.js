document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.Bpower');
    const ecrans = document.querySelectorAll('.ecran');
    const label = document.querySelector('.titre-portfolio');
    const voyant = document.querySelector('.voyant');
    const ecranHaut = document.querySelector('.Ehaut');
    const afficheApp = document.querySelector('.container-ecran-bas');

    let estAllume = false;
    let timeouts = [];
    window.numAppSelect = 0;

    function resetTimeouts() {
        timeouts.forEach(id => clearTimeout(id));
        timeouts = [];
    }

    function toggleEcrans(on) {
        ecrans.forEach(ecran => {
            ecran.classList.toggle('ecran-on', on);
        });
    }

    function afficherTitre() {
        label.classList.add('titre-portfolio-view');
        ecranHaut.classList.add('Ehaut-centre');

        timeouts.push(setTimeout(() => label.style.opacity = '1', 1000));

        timeouts.push(setTimeout(() => {
            label.style.opacity = '0';
            timeouts.push(setTimeout(() => {
                label.classList.remove('titre-portfolio-view');
                ecranHaut.classList.remove('Ehaut-centre');
            }, 1000));
        }, 4000));
    }

    function clignoterVoyant() {
        timeouts.push(setTimeout(() => {
            for (let i = 0; i < 7 * 2; i++) {
                timeouts.push(setTimeout(() => {
                    voyant.classList.toggle('voyant-orange');
                }, i * 300));
            }
            timeouts.push(setTimeout(() => {
                voyant.classList.add('voyant-blue');
            }, 4200));
        }, 1500))
    }

    function gererAffichageApp(on) {
        if (on) {
            afficheApp.classList.add('container-ecran-bas-visible');
            timeouts.push(setTimeout(() => {
                afficheApp.style.opacity = '1';
            }, 5500));
            document.getElementById('app0').classList.add('select-app');
            window.numAppSelect = 0;
        } else {
            afficheApp.style.opacity = '0';
            afficheApp.classList.remove('container-ecran-bas-visible');
        }
    }

    button.addEventListener('click', function () {
        document.querySelector('.ledPower').classList.toggle('led-on');
        resetTimeouts();

        // Attente pour simuler l’allumage
        setTimeout(() => {
            toggleEcrans(!estAllume);

            if (!estAllume) {
                afficherTitre();
                clignoterVoyant();
            } else {
                voyant.classList.remove('voyant-orange', 'voyant-blue');
                label.style.opacity = '0';
                label.classList.remove('titre-portfolio-view');
                ecranHaut.classList.remove('Ehaut-centre');
            }

            gererAffichageApp(!estAllume);
            estAllume = !estAllume;
        }, 500);
    });
});