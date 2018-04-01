import dispatcher from '../dispatcher';

export function createCharacter(name) {
    dispatcher.dispatch({
        type: "CREATE_CHARACTER",
        text: name,
    });
}

export function editCharacter(name) {
    dispatcher.dispatch({
        type: "EDIT_CHARACTER",
        name,
    });
}