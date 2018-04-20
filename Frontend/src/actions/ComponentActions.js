import dispatcher from '../dispatcher';

export function editComponent(data, category, inactive, active, action, id) {
    dispatcher.dispatch({
        type: "EDIT_COMPONENT",
        data,
        category,
        inactive,
        active,
        action,
        id
    });
}

export function editCategory(data, category, inactive, active, action, id) {
    dispatcher.dispatch({
        type: "EDIT_CATEGORY",
        data,
        category,
        inactive,
        active,
        action,
        id
    });
}

export function addCategory(data, category, inactive, active, action) {
    dispatcher.dispatch({
        type: "ADD_CATEGORY",
        data,
        category,
        inactive,
        active,
        action
    });
}