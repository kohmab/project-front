function setPageSize(size){
    parameters.pageSize = size;
    update()
}

function addPageSizeButton(size) {
    const button = $('<button>')
        .text(size)
        .addClass("dropdown-item")
        .click(() => setPageSize(size))
    const li = $('<li>').append(button)
    $('#pageSizeSelector').append(li)
}

function addAllPageSizeButtons() {
    for (let size of pageSizes){
        addPageSizeButton(size)
    }
}

$('document').ready(addAllPageSizeButtons)