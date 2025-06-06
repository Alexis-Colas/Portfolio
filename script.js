document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.Bpower');
    const ecrans = document.querySelectorAll('.ecran');

    button.addEventListener('click', function () {
        document.querySelector('.ledPower').classList.toggle('led-on');

        setTimeout(() => {
            ecrans.forEach((ecran) => {
                ecran.classList.toggle('ecran-on');
            });
            document.querySelector('.titre-portfolio').classList.toggle('titre-portfolio-view');
        }, 500);
    });
});