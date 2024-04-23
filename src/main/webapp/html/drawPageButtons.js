function addButton(i) {
    const button = $('<button>').text(i).addClass('btn btn-secondary');
    $('#pageNumButtons').append(button)
}

for (let i = 0; i < 9; i++){
    addButton(i)
}