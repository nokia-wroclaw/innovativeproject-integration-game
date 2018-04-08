import dispatcher from '../dispatcher';

export function editComponent(value) {
    dispatcher.dispatch({
        type: "EDIT_COMPONENT",
        value,
    });
}

export function addComponent(value) {
    dispatcher.dispatch({
        type: "ADD_COMPONENT",
        value,
    });
}