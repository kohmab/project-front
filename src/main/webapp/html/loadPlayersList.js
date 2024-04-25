function generateHead() {
    $("#accountListHead").html('')
    for (let key in fieldsColumnsMap) {
        let th = $('<th>').text(fieldsColumnsMap[key]).attr("scope","col")
        $("#accountListHead").append(th)
    }
    for (let key in columnsActionsMap){
        let th = $('<th>').text(key).attr("scope","col")
        $("#accountListHead").append(th)
    }

}

function format(key, string) {
    if (key === "birthday")
        return new Date(string).toLocaleDateString()
    return string
}

function generateRow(player) {
    const row = $('<tr>').attr("id",'tr'+player.id)
    let isFirstColumn = true
    for (let key in fieldsColumnsMap) {
        if (isFirstColumn) {
            const th = $('<th>')
                .attr('scope','row')
                .text(format(key, player[key]))
            row.append(th)
            isFirstColumn = false
        } else {
            const td = $('<td>')
                .text(format(key, player[key]))
            row.append(td)
        }
    }
    for (let key in columnsActionsMap){
        let td = $('<td>')
            .append(columnsActionsMap[key].action(player.id))
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