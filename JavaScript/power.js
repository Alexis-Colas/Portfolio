document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.Bpower');
    let ecrans = document.querySelectorAll('.ecran');
    const label = document.querySelector('.titre-portfolio');
    const voyant = document.querySelector('.voyant');
    const ecranHaut = document.querySelector('.Ehaut');
    const afficheApp = document.querySelector('.container-ecran-bas');
    const afficheAppInfo = document.querySelector('.container-EH-info-app');

    let estAllume = false;
    let timeouts = [];
    window.numAppSelect = 0;
    window.initFinish = false;
    window.navigApp = true;

    function resetTimeouts() {
        timeouts.forEach(id => clearTimeout(id));
        timeouts = [];
    }

    function toggleEcrans() {
        ecrans.forEach(ecran => {
            ecran.classList.toggle('ecran-on');
        });
    }

    function afficherTitre() {
        label.style.display = 'flex';
        ecranHaut.classList.add('Ehaut-centre');

        timeouts.push(setTimeout(() => label.style.opacity = '1', 1000));

        timeouts.push(setTimeout(() => {
            label.style.opacity = '0';
            timeouts.push(setTimeout(() => {
                label.style.display = 'none';
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
            timeouts.push(setTimeout(() => {
                afficheApp.style.display = 'flex';
                afficheAppInfo.style.display = 'flex';
                afficheApp.style.opacity = '1';
                afficheAppInfo.style.opacity = '1';
            }, 5500));
        } else {
            afficheApp.style.opacity = '0';
            afficheAppInfo.style.opacity = '0';
            cachesEcran();
        }
    }

    function cachesEcran(){
        const ecrans = document.querySelectorAll('.estEcran');
        ecrans.forEach(ecran => {
            ecran.style.display = 'none'
        });
    }

    button.addEventListener('click', function () {
        document.querySelector('.ledPower').classList.toggle('led-on');
        resetTimeouts();
        window.navigApp = true;

        setTimeout(() => {
            cachesEcran();
            toggleEcrans();

            if (!estAllume) {
                afficherTitre();
                clignoterVoyant();
            } else {
                voyant.classList.remove('voyant-orange', 'voyant-blue');
                label.style.opacity = '0';
                ecranHaut.classList.remove('Ehaut-centre');
                cachesEcran();
            }

            gererAffichageApp(!estAllume);
            estAllume = !estAllume;
            if(estAllume){
                timeouts.push(setTimeout(() => {
                    window.initFinish = !window.initFinish;
                }, 5600))
            } else {
                window.initFinish = !window.initFinish;
            }
        }, 500);
    });
});