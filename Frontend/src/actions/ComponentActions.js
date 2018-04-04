import dispatcher from '../dispatcher';

export function editComponent(value) {
    dispatcher.dispatch({
        type: "EDIT_COMPONENT",
        value,
    });
}