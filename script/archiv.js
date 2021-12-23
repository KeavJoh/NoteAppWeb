


// ARCHIVE
// When loading the page the following is executed in archive.html
function renderArchiv() {
    let content = document.getElementById('content-add');
    content.innerHTML = '';

    for (let i = 0; i < archivedTitels.length; i++) {
        const noteTitle = archivedTitels[i];
        const noteNotation = archivedNotations[i];

        content.innerHTML += `
        <div class="n-index">
            <h4>${noteTitle}</h4>
            <textarea disabled="" name="" id="" cols="25" rows="10">${noteNotation}</textarea>
            <div class="user-btn">
                <a onclick="addFromArchive(${i})" title="Zu Notitzen verschieben"><img src="img/add-dark.png" alt=""></a>
                <a onclick="deleteFromArchive(${i})" title="In den Papierkorb"><img src="img/delete-dark.png" alt=""></a>
            </div>
        </div>
        `
    }

    counter();
}





// PUSH FROM ARCHIVE TO NOTATION
function addFromArchive(i) {
    noteTitels.push(archivedTitels[i]);
    noteNotations.push(archivedNotations[i]);

    archivedTitels.splice([i], 1);
    archivedNotations.splice([i], 1);

    renderArchiv();
    save();
}



// DELET FROM ARCHIVE
function deleteFromArchive(i) {
    trashTitels.push(archivedTitels[i]);
    trashNotations.push(archivedNotations[i]);

    archivedTitels.splice([i], 1);
    archivedNotations.splice([i], 1);

    renderArchiv();
    save();
}
