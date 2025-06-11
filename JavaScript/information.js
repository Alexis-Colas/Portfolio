document.addEventListener('DOMContentLoaded', function () {

    function cachesEcran(){
        const ecrans = document.querySelectorAll('.estEcran');
        ecrans.forEach(ecran => {
            ecran.style.display = 'none'
        });
    }

    window.buttonA.addEventListener('click', function(){
        if(window.numAppSelect==0 && window.initFinish){
            cachesEcran();
            document.querySelector('.information-haut').style.display = 'flex';
            document.querySelector('.information-bas').style.display = 'flex';
        }
    });

    const buttonUE1 = document.getElementById('UE1');
    const buttonUE4 = document.getElementById('UE4');

    buttonUE1.addEventListener('click', function(){
        cachesEcran();
        document.querySelector('.information-UE1-haut').style.display = 'flex';
        document.getElementById('listeSavoirUE1').style.display = 'flex';
    })

    buttonUE4.addEventListener('click', function(){
        cachesEcran();
        document.querySelector('.information-UE4-haut').style.display = 'flex';
        document.getElementById('listeSavoirUE4').style.display = 'flex';
    })
});