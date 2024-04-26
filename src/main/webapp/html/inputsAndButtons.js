const deleteIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path></svg>'
const editIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"></path></svg>'
const saveIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"></path></svg>'
const cancelIcon = '<span>&times;</span>'

function createButton(playerId, buttonHtml, action) {
    return $('<button>', {name: 'actionButton'})
        .addClass("btn btn-secondary")
        .html(buttonHtml)
        .click(() => action(playerId))
}

function createEditButton(playerId) {
    return createButton(playerId, editIcon, createInputsUpdate)
}

function createDeleteButton(playerId) {
    return createButton(playerId, deleteIcon, toggleDeleteDialog)
}

function createSaveButton(playerId) {
    return createButton(playerId, saveIcon, toggleSaveDialog)
}

function createCancelButton(playerId) {
    return createButton(playerId, cancelIcon, update)
}

function createSelectBox(name, currValue) {
    const select = $('<select>', {
        name: name,
        class: 'form-control'
    })
    for (let value of enums[name]) {
        const option = $('<option>', {value: value, html: value})
        if (value === currValue) {
            option.prop('selected', true)
        }
        select.append(option)
    }
    return select
}

function createTextBox(name, currValue) {
    return $('<input>', {
        type: 'text',
        val: currValue,
        name: name,
        class: 'form-control'
    })
}

function createCheckBox(name, currValue) {
    return $('<input>', {
        type: 'checkbox',
        name: name,
        class: 'form-check-input'
    }).prop('checked', currValue === 'true')
}


function getFromTextBox(cell){
    return cell.find('input').val()
}

function getFromSelectBox(cell){
    return cell.find('select').val()
}

function getFromCheckBox(cell){
    return cell.find('input').prop('checked')
}

function toggleConfirmDialog(playerId,title,text,confirmButtonText,action){
    $('#confirmDialogTitle').html(title)
    $('#confirmDialogText').html(text)
    $('#confirmDialogButton')
        .text(confirmButtonText)
        .off('click')
        .click( () => { action(playerId); update()}
        )
    $('#confirmDialog').modal('show')
}

function toggleDeleteDialog(playerId){
    toggleConfirmDialog(playerId,
        'Confirm action',
        'Do you want to delete player with id ' + playerId + '?',
        'Delete',
        deletePlayer)
}

function toggleSaveDialog(playerId){
    toggleConfirmDialog(playerId,
        'Confirm action',
        'Do you want to change player with id ' + playerId + '?',
        'Update',
        updatePlayer)
}