function generateHead() {
    $("#accountListHead").html('')
    for (let key in playerFields) {
        let th = $('<th>').text(playerFields[key].columnTitle).attr("scope", "col")
        $("#accountListHead").append(th)
    }
    for (let key in actions) {
        let th = $('<th>').text(key).attr("scope", "col")
        $("#accountListHead").append(th)
    }

}

function format(key, value) {
    if (key === "birthday")
        return new Date(value).toLocaleDateString()
    return value
}

function generateRow(player) {
    const row = $('<tr>').attr("id", 'tr' + player.id)
    for (let key in playerFields) {
        const td = $('<td>', {name: key})
            .text(format(key, player[key]))
        row.append(td)
    }
    for (let key in actions) {
        let td = $('<td>', {name: key})
            .append(actions[key].createButton(player.id))
        row.append(td)
    }
    $('#accountListTbody').append(row)
}

function drawTable() {
    $('#accountListTbody').html("")
    $.ajax({
        url: '/rest/players',
        data: {
            pageNumber: parameters.pageNumber,
            pageSize: parameters.pageSize
        },
        dataType: 'json'
    }).done(function (players) {
        generateHead()
        for (const player of players) {
            generateRow(player)
        }
    })
}