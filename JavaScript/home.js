document.addEventListener('DOMContentLoaded', () => {

    function cachesEcran(){
        const ecrans = document.querySelectorAll('.estEcran');
        ecrans.forEach(ecran => {
            ecran.style.display = 'none'
        });
    }

    const buttonHome = document.querySelector('.home');
    buttonHome.addEventListener('click', function () {
        if (window.initFinish) {
            window.navigApp = true;
            cachesEcran();
            const afficheApp = document.querySelector('.container-ecran-bas');
            const afficheAppInfo = document.querySelector('.container-EH-info-app');
            afficheApp.style.display = 'flex';
            afficheApp.style.opacity = '1';
            afficheAppInfo.style.display = 'flex';
            afficheAppInfo.style.opacity = '1';
        }
    })
})