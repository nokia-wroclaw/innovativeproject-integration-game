import dispatcher from '../dispatcher';

export function editComponent(data) {
    dispatcher.dispatch({
        type: "EDIT_COMPONENT",
        data,
    });
}

export function addComponent(value) {
    dispatcher.dispatch({
        type: "ADD_COMPONENT",
        value,
    });
}