const fieldsColumnsMap = {
    id: '#',
    name: 'Name',
    title: 'Title',
    race: 'Race',
    profession: 'Profession',
    level: "Level",
    birthday: "Birthday",
    banned: "Banned",
}

const columnsActionsMap = {
    "Edit": {action: createEditButton},
    "Delete": {action: createDeleteButton}
}

const pageSizes = [3,5,10,20]

const defaultParameters = {
    pageNumber: 0,
    pageSize: 5
}

let parameters = defaultParameters