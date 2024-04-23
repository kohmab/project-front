
function getPlayerCount() {
    let playersCount = 0
    let url = 'rest/players/count'
    $.ajax({url: url, async: false})
        .done(function (data) {
            playersCount = parseInt(data)
        })
    return playersCount
}


function generateHead() {
    let head = ''
    for (let key in fieldsColumnsMap) {
        head += '<th scope="col">' + fieldsColumnsMap[key] + '</th>'
    }
    $("#accountListHead").html(head)
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
    $('#accountsListTbody').append(row)
}

function drawTable(currentPage,playersPerPage){
$.ajax({
    url: '/rest/players',
    dataType: 'json'
}).done(function (players) {
    generateHead()
    for (const player of players) {
        generateRow(player)
    }
})
}

drawTable(playersPerPage,pageNumber)