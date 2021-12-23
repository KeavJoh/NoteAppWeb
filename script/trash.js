


// TRASH
// When loading the page the following is executed in trash.html
function renderTrash() {
    let content = document.getElementById('content-add');
    content.innerHTML = '';

    for (let i = 0; i < trashTitels.length; i++) {
        const noteTitle = trashTitels[i];
        const noteNotation = trashNotations[i];

        content.innerHTML += `
        <div class="n-index">
            <h4>${noteTitle}</h4>
            <textarea disabled="" name="" id="" cols="25" rows="10">${noteNotation}</textarea>
            <div class="user-btn">
                <a onclick="addFromTrash(${i})" title="Zu Notitzen verschieben"><img src="img/add-dark.png" alt=""></a>
                <a onclick="archiveFromTrash(${i})" title="Archivieren"><img src="img/archiv-dark.png" alt=""></a>
                <a onclick="finalTrash(${i})" class="final-trash" title="Endgültig löschen"><img src="img/x-dark.png" alt=""></a>
            </div>
        </div>
        `
    }

    counter();
}



// PUSH FROM TRASH TO NOTATION
function addFromTrash(i) {
    noteTitels.push(trashTitels[i]);
    noteNotations.push(trashNotations[i]);

    trashTitels.splice([i], 1);
    trashNotations.splice([i], 1);

    renderTrash();
    save();
}



// PUSH FROM TRASH TO ARCHIVE
function archiveFromTrash(i) {
    archivedTitels.push(trashTitels[i]);
    archivedNotations.push(trashNotations[i]);

    trashTitels.splice([i], 1);
    trashNotations.splice([i], 1);

    renderTrash();
    save();
}



// FINAL TRASH
function finalTrash(i) {
    trashTitels.splice([i], 1);
    trashNotations.splice([i], 1);

    renderTrash();
    save();
}