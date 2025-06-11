function afficherHeureDate() {
    const maintenant = new Date();

    const heure = maintenant.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    document.getElementById('horloge').textContent = `${heure}`;
}

setInterval(afficherHeureDate, 1000);
afficherHeureDate();