function createInputsUpdate(playerId) {
    disableAllActionButtons()
    $('#tr' + playerId + ' td').each(function () {
        const name = $(this).attr('name')
        if (name in playerFields && playerFields[name].editable) {
            const currValue = $(this).text()
            $(this).html(playerFields[name].createInput(name, currValue))
        } else if (name === 'Edit') {
            $(this).html(createSaveButton(playerId))
        } else if (name === 'Delete') {
            $(this).html(createCancelButton())
        }
    })
}

function createInputsNewPlayer(){
    for (let name in playerFields){
        if (playerFields[name].createInput != null){
            const title = playerFields[name].columnTitle
            const method = playerFields[name].createInput
            $('#newPlayerDialogInputs').append(createNamedInput(name,title,method))
        }
    }
    $('#newPlayerDialogButton').off('click').click(() => newPlayer())
}


function disableAllActionButtons() {
    $('[name="actionButton"]').prop("disabled", true);
}

function newPlayer(){
    let playerData = {}
    for (let name in playerFields){
        if (playerFields[name].createInput != null){
            playerData[name] = playerFields[name].getFromInput($('#newPlayer_'+name))
        }
    }
    $.ajax({
            url: '/rest/players/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json;charset=UTF-8',
            async: false,
            data: JSON.stringify(playerData),
            success: function () {
                showNotification(true, 'New player created.')
                update()
            },
            error: function (response) {
                showNotification(false, 'Failed create new player. Status code is ' + response.status)
            }
        }
    )
}

function updatePlayer(playerId) {
    let playerData = {}
    $('#tr' + playerId + ' td').each(function () {
        const name = $(this).attr('name')
        if (name in playerFields && playerFields[name].editable) {
            playerData[name] = playerFields[name].getFromInput($(this))
        }
    })

    $.ajax({
            url: '/rest/players/' + playerId,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json;charset=UTF-8',
            async: false,
            data: JSON.stringify(playerData),
            success: function () {
                showNotification(true, 'Information about the player with id = ' + playerId + ' has been updated.')
            },
            error: function (response) {
                showNotification(false, 'Failed to update information about player with id = ' + playerId + '. Status code is ' + response.status)
            }
        }
    )
}

function deletePlayer(playerId) {
    $.ajax({
            url: '/rest/players/' + playerId,
            type: 'DELETE',
            success: function () {
                showNotification(true, 'Player ' + playerId + ' was deleted.')
            },
            error: function (response) {
                showNotification(false, 'Failed to delete player with id = ' + playerId + '. Status code is ' + response.status)
            }
        }
    )
}


