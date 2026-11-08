function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const envelopeScreen = document.getElementById('envelope-screen');
    const invitationScreen = document.getElementById('invitation-screen');

    // 1. Avvia l'animazione di apertura della linguetta della busta
    envelope.classList.add('open');

    // 2. Dopo 800 millisecondi (il tempo dell'animazione), procedi col cambio scena
    setTimeout(() => {
        envelopeScreen.classList.remove('active');
        envelopeScreen.classList.add('hidden');
        
        invitationScreen.classList.remove('hidden');
        invitationScreen.classList.add('active');
        
        // Questo sblocca lo scroll della pagina se l'invito dovesse essere più lungo dello schermo
        document.body.style.overflow = 'auto'; 
    }, 800);
}