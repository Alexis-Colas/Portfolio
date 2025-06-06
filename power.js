document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.Bpower');
    const ecrans = document.querySelectorAll('.ecran');
    const label = document.querySelector('.titre-portfolio');
    const voyant = document.querySelector('.voyant');
    const ecran_haut = document.querySelector('.Ehaut');
    let estAllume = false;
    let clignotements = [];

    let timeoutFadeIn = null;
    let timeoutFadeOut = null;
    let timeoutHideLabel = null;

    button.addEventListener('click', function () {
        document.querySelector('.ledPower').classList.toggle('led-on');

        if (timeoutFadeIn) clearTimeout(timeoutFadeIn);
        if (timeoutFadeOut) clearTimeout(timeoutFadeOut);
        if (timeoutHideLabel) clearTimeout(timeoutHideLabel);

        setTimeout(() => {
            ecrans.forEach((ecran) => {
                ecran.classList.toggle('ecran-on');
            });

            label.classList.add('titre-portfolio-view');
            ecran_haut.classList.add('Ehaut-centre');

            if (!estAllume) {
                timeoutFadeIn = setTimeout(() => {
                    label.style.opacity = '1';
                }, 1000);

                estAllume = true;

                timeoutFadeOut = setTimeout(() => {
                    label.style.opacity = '0';

                    timeoutHideLabel = setTimeout(() => {
                        label.classList.remove('titre-portfolio-view');
                        ecran_haut.classList.remove('Ehaut-centre');
                    }, 1000);
                }, 3000);

            } else {
                voyant.classList.remove('voyant-blue')
                estAllume = false;
                label.style.opacity = '0';
                label.classList.remove('titre-portfolio-view');
                ecran_haut.classList.remove('Ehaut-centre');
            }
        }, 500);

        if(!estAllume){
            setTimeout(() => {
                for (let i = 0; i < 7 * 2; i++) {
                    const id = setTimeout(() => {
                        voyant.classList.toggle('voyant-orange')
                    }, i * 300);
                    clignotements.push(id);
                }
                const idBlue = setTimeout(() => {
                    voyant.classList.add('voyant-blue')
                }, 4200);
                clignotements.push(idBlue);
            }, 3000);
        }else{
            clignotements.forEach(id => clearTimeout(id));
            clignotements = [];
            voyant.classList.remove('voyant-orange', 'voyant-blue');
        }

    });
});
