


// NOTATIONS
// When loading the page the following is executed in index.html
function renderMain() {
    let content = document.getElementById('content-add');
    content.innerHTML = '';

    for (let i = 0; i < noteTitels.length; i++) {
        const noteTitle = noteTitels[i];
        const noteNotation = noteNotations[i];

        content.innerHTML += `
        <div class="n-index">
            <h4>${noteTitle}</h4>
            <textarea disabled="" name="" id="">${noteNotation}</textarea>
            <div class="user-btn">
                <a onclick="archiveNotation(${i})" title="Archivieren"><img src="img/archiv-dark.png" alt=""></a>
                <a onclick="deleteNotation(${i})" title="In den Papierkorb"><img src="img/delete-dark.png" alt=""></a>
            </div>
        </div>
        `
    }

    counter();
}



// ADD NOTATION
function addNotation() {
    let title = document.getElementById('title');
    let notation = document.getElementById('notation')

    // ALERT + RESULT
    if (title.value == '' || notation.value == '') {
        document.getElementById('alert').style.display = 'block';
    } else {
        noteTitels.push(title.value);
        noteNotations.push(notation.value);

        document.getElementById('title').value = '';
        document.getElementById('notation').value = '';

        document.getElementById('alert').style.display = 'none';

        renderMain();
        save();
    }
}



// ARCHIVE NOTATION
function archiveNotation(i) {
    archivedTitels.push(noteTitels[i]);
    archivedNotations.push(noteNotations[i]);

    noteTitels.splice([i], 1);
    noteNotations.splice([i], 1);

    renderMain();
    save();
}


// DELETE NOTATION
function deleteNotation(i) {
    trashTitels.push(noteTitels[i]);
    trashNotations.push(noteNotations[i]);

    noteTitels.splice([i], 1);
    noteNotations.splice([i], 1);

    renderMain();
    save();
}