import dispatcher from '../dispatcher';

export function editComponent(data, category, inactive, active) {
    dispatcher.dispatch({
        type: "EDIT_COMPONENT",
        data,
        category,
        inactive,
        active,
    });
}

export function editCategory(data, category, inactive, active) {
    dispatcher.dispatch({
        type: "EDIT_CATEGORY",
        data,
        category,
        inactive,
        active,
    });
}

export function addCategory(data, categoryAdd, inactiveAdd, activeAdd) {
    dispatcher.dispatch({
        type: "ADD_CATEGORY",
        data,
        categoryAdd,
        inactiveAdd,
        activeAdd,
    });
}

export function deleteComponent(value) {
    dispatcher.dispatch({
        type: "DELETE_COMPONENT",
        value,
    });
}