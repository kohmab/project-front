const playerFields = {
    id: {
        columnTitle: '#',
        editable: false,
        createInput: undefined
    },
    name: {
        columnTitle: 'Name',
        editable: true,
        createInput: createTextBox,
        getFromInput: getFromTextBox,
    },
    title: {
        columnTitle: 'Title',
        editable: true,
        createInput: createTextBox,
        getFromInput: getFromTextBox,
    },
    race: {
        columnTitle: 'Race',
        editable: true,
        createInput: createSelectBox,
        getFromInput: getFromSelectBox,
    },
    profession: {
        columnTitle: 'Profession',
        editable: true,
        createInput: createSelectBox,
        getFromInput: getFromSelectBox,

    },
    level: {
        columnTitle: "Level",
        editable: false,
        createInput: undefined
    },
    birthday: {
        columnTitle: "Birthday",
        editable: false,
        createInput: undefined
    },
    banned: {
        columnTitle: "Banned",
        editable: true,
        createInput: createCheckBox,
        getFromInput: getFromCheckBox,
    },
}

const actions = {
    "Edit": {createButton: createEditButton},
    "Delete": {createButton: createDeleteButton}
}

const enums = {
    race: ['HUMAN', 'DWARF', 'ELF', 'GIANT', 'ORC', 'TROLL', 'HOBBIT'],
    profession: ['WARRIOR', 'ROGUE', 'SORCERER', 'CLERIC', 'PALADIN', 'NAZGUL', 'WARLOCK', 'DRUID']
}

const pageSizes = [3, 5, 10, 20]


const defaultParameters = {
    pageNumber: 0,
    pageSize: 5
}

const parameters = defaultParameters