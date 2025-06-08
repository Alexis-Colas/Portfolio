document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.Bpower');
    const ecrans = document.querySelectorAll('.ecran');
    const label = document.querySelector('.titre-portfolio');
    const voyant = document.querySelector('.voyant');
    const ecranHaut = document.querySelector('.Ehaut');
    const afficheApp = document.querySelector('.container-ecran-bas');
    const afficheAppInfo = document.querySelector('.container-EH-info-app');

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
            afficheApp.style.display = 'flex';
            timeouts.push(setTimeout(() => {
                afficheApp.style.opacity = '1';
                afficheAppInfo.style.display = 'flex';
                afficheAppInfo.style.opacity = '1';
            }, 5500));
            document.getElementById('app0').classList.add('select-app');
            window.numAppSelect = 0;
        } else {
            afficheApp.style.opacity = '0';
            window.numAppSelect = 0;
            document.querySelector('.nom-app').textContent = 'Information';
            document.querySelector('.info-logo img').src = 'images/fiche-de-donnees.png';
            afficheApp.style.display = 'none';
            afficheAppInfo.style.display = 'none';
            document.querySelector('.select-app').classList.remove('select-app');
        }
    }

    button.addEventListener('click', function () {
        document.querySelector('.ledPower').classList.toggle('led-on');
        resetTimeouts();

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