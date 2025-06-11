document.addEventListener('DOMContentLoaded', function () {

    function cachesEcran(){
        const ecrans = document.querySelectorAll('.estEcran');
        ecrans.forEach(ecran => {
            ecran.style.display = 'none'
        });
    }

    window.buttonA.addEventListener('click', function(){
        if(window.numAppSelect==7 && window.initFinish){
            cachesEcran();
            document.getElementById('github-haut').style.display = 'flex';
            document.getElementById('github-bas').style.display = 'flex';
        }
    });
});