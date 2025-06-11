document.addEventListener('DOMContentLoaded', function () {

    function cachesEcran(){
        const ecrans = document.querySelectorAll('.estEcran');
        ecrans.forEach(ecran => {
            ecran.style.display = 'none'
        });
    }

    window.buttonA.addEventListener('click', function(){
        if(window.numAppSelect==1 && window.initFinish){
            cachesEcran();
            document.getElementById('profil-haut').style.display = 'flex';
            document.getElementById('profil-bas').style.display = 'flex';
        }
    });
});