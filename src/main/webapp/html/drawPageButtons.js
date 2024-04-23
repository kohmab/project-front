function setPage(i) {
    parameters.pageNumber = i;
    update()
}

function addCurrPageButton(i) {
    let button = $('<button>')
        .text(i + 1)
        .addClass('btn')
        .click(() => setPage(i))
    if (i === parameters.pageNumber) {
        button.addClass("btn-primary")
    } else {
        button.addClass("btn-secondary")
    }
    $('#pageNumButtons').append(button)
}

function getPlayerCount() {
    let playersCount = 0
    let url = 'rest/players/count'
    $.ajax({url: url, async: false})
        .done(function (data) {
            playersCount = parseInt(data)
        })
    return playersCount
}

function addAllPageButtons() {
    $('#pageNumButtons').html("")
    const playerCount = getPlayerCount()
    const maxPageNumber = Math.ceil(playerCount / parameters.pageSize) - 1
    parameters.pageNumber = Math.min(parameters.pageNumber, maxPageNumber)
    for (let i = 0; i <= maxPageNumber; i++) {
        addCurrPageButton(i)
    }
}

