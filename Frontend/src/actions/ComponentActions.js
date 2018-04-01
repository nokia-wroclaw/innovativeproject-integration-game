import dispatcher from '../dispatcher';

export function editComponent(name) {
    dispatcher.dispatch({
        type: "EDIT_COMPONENT",
        name,
    });
}