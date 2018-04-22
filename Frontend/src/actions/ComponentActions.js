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

export function addCharacter(data, category, inactive, active, action, id) {
    dispatcher.dispatch({
        type: "ADD_CHARACTER",
        data,
        category,
        inactive,
        active,
        action,
        id
    });
}

export function deleteCharacter(data, category, action) {
    dispatcher.dispatch({
        type: "DELETE_CHARACTER",
        data,
        category,
        action
    });
}

export function deleteCategory(action, id) {
    dispatcher.dispatch({
        type: "DELETE_CATEGORY",
        action,
        id
    });
}