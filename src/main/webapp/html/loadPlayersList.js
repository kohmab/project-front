function generateHead() {
    $("#accountListHead").html('')
    for (let key in fieldsColumnsMap) {
        let th = $('<th>').text(fieldsColumnsMap[key]).attr("scope","col")
        $("#accountListHead").append(th)
    }

}

function format(key, string) {
    if (key === "birthday")
        return new Date(string).toLocaleDateString()
    return string
}

function generateRow(player) {
    let row = '<tr>'
    let isFirstColumn = true
    for (let key in fieldsColumnsMap) {
        if (isFirstColumn) {
            row += '<th scope="row">' + format(key, player[key]) + '</th>'
            isFirstColumn = false
        } else {
            row += '<td>' + format(key, player[key]) + '</td>'
        }
    }
    row += '</tr>'
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