import dispatcher from '../dispatcher';

export function editComponent(data, category) {
    dispatcher.dispatch({
        type: "EDIT_COMPONENT",
        data,
        category,
    });
}

export function addComponent(value) {
    dispatcher.dispatch({
        type: "ADD_COMPONENT",
        value,
    });
}