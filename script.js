document.addEventListener('DOMContentLoaded', function() {
    const nome = prompt("Inserisci il tuo nome:");
    const saluto = document.getElementById('nomeUtente');
    saluto.textContent = nome;
    
    const calcolaButton = document.getElementById('calcolaButton');
    calcolaButton.addEventListener('click', calcolaPrezzo);
});

function calcolaPrezzo() {
    const luciPrezzo = 50;
    const portapacchiPrezzo = 100;
    const ciclocomputerPrezzo = 150;
    const parafanghiPrezzo = 80;
    const borsaPosteriorePrezzo = 120;
    const pompaPrezzo = 30;
    const copertonePrezzo = 70;
    const sellaPrezzo = 90;
    const catenaPrezzo = 40;

    let prezzoBase = 1000;

    const codiceSconto = document.getElementById('codiceScontoInput').value.toUpperCase();
    if (codiceSconto === 'SCONTO10') {
        prezzoBase *= 0.9; // Sconto del 10%
    } else if (codiceSconto === 'SCONTO20') {
        prezzoBase *= 0.8; // Sconto del 20%
    }

    let prezzoAccessori = 0;
    if (document.getElementById('luciCheckbox').checked) prezzoAccessori += luciPrezzo;
    if (document.getElementById('portapacchiCheckbox').checked) prezzoAccessori += portapacchiPrezzo;
    if (document.getElementById('ciclocomputerCheckbox').checked) prezzoAccessori += ciclocomputerPrezzo;
    if (document.getElementById('parafanghiCheckbox').checked) prezzoAccessori += parafanghiPrezzo;
    if (document.getElementById('borsaPosterioreCheckbox').checked) prezzoAccessori += borsaPosteriorePrezzo;
    if (document.getElementById('pompaCheckbox').checked) prezzoAccessori += pompaPrezzo;
    if (document.getElementById('copertoneCheckbox').checked) prezzoAccessori += copertonePrezzo;
    if (document.getElementById('sellaCheckbox').checked) prezzoAccessori += sellaPrezzo;
    if (document.getElementById('catenaCheckbox').checked) prezzoAccessori += catenaPrezzo;

    const prezzoTotale = prezzoBase + prezzoAccessori;

    const prezzoSpan = document.getElementById('prezzo');
    prezzoSpan.textContent = prezzoTotale.toFixed(2);
}