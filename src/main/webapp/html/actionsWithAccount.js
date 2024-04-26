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

function disableAllActionButtons() {
    $('[name="actionButton"]').prop("disabled", true);
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
            data: JSON.stringify(playerData)
        }
    )
}

function deletePlayer(playerId) {
    $.ajax({
            url: '/rest/players/' + playerId,
            type: 'DELETE'
        }
    )
}