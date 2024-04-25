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

const selectors={
    race: ['HUMAN','DWARF','ELF','GIANT','ORC','TROLL','HOBBIT'],
    profession: ['WARRIOR','ROGUE','SORCERER','CLERIC','PALADIN','NAZGUL','WARLOCK','DRUID']
}

const pageSizes = [3,5,10,20]


const defaultParameters = {
    pageNumber: 0,
    pageSize: 5
}

let parameters = defaultParameters