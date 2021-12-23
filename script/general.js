


// GENERAL
let noteTitels = ['Test', 'Morgen Wichtig', 'Einkaufen', 'Musik'];
let noteNotations = ['Dies ist ein Test', 'Einkaufen, Fahrradfahren, Tennistraining', 'Watte, Brötchen', 'Muss unbedingt wieder Musik hören'];
let trashTitels = [];
let trashNotations = [];
let archivedTitels = [];
let archivedNotations = [];
load();



// Quantity of Notations
function counter() {
    let note = noteTitels.length;
    let trash = trashTitels.length;
    let archived = archivedTitels.length;
    let counter = document.getElementById('counter');

    counter.innerHTML = '';
    counter.innerHTML = `
    <a href="index.html">Notitzen: ${note}</a>
    <a href="archive.html">Archiviert: ${archived}</a>
    <a href="trash.html">Papierkorb: ${trash}</a>
    `
}



// SAVE ALL NOTATIONS
function save() {
    let noteTitelsText = JSON.stringify(noteTitels);
    localStorage.setItem('noteTitle', noteTitelsText);

    let noteNotationsText = JSON.stringify(noteNotations);
    localStorage.setItem('noteNotation', noteNotationsText);

    let trashTitelsText = JSON.stringify(trashTitels);
    localStorage.setItem('trashTitle', trashTitelsText);

    let trashNotationsText = JSON.stringify(trashNotations);
    localStorage.setItem('trashNotation', trashNotationsText);

    let archivedTitelsText = JSON.stringify(archivedTitels);
    localStorage.setItem('archivedTitle', archivedTitelsText);

    let archivedNotationsText = JSON.stringify(archivedNotations);
    localStorage.setItem('archivedNotation', archivedNotationsText);
}



// LOAD ALL NOTATIONS
function load() {
    let noteTitelsText = localStorage.getItem('noteTitle');
    let noteNotationsText = localStorage.getItem('noteNotation');
    let trashTitelsText = localStorage.getItem('trashTitle');
    let trashNotationsText = localStorage.getItem('trashNotation');
    let archivedTitelsText = localStorage.getItem('archivedTitle');
    let archivedNotationsText = localStorage.getItem('archivedNotation');

    if (noteTitelsText && noteNotationsText || trashTitelsText && trashNotationsText || archivedTitelsText && archivedNotationsText) {
        noteTitels = JSON.parse(noteTitelsText);
        noteNotations = JSON.parse(noteNotationsText);
        trashTitels = JSON.parse(trashTitelsText);
        trashNotations = JSON.parse(trashNotationsText);
        archivedTitels = JSON.parse(archivedTitelsText);
        archivedNotations = JSON.parse(archivedNotationsText);
    }
}