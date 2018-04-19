import dispatcher from '../dispatcher';

export function editComponent(data, category, inactive, active, action) {
    dispatcher.dispatch({
        type: "EDIT_COMPONENT",
        data,
        category,
        inactive,
        active,
        action
    });
}

export function editCategory(data, category, inactive, active, action) {
    dispatcher.dispatch({
        type: "EDIT_CATEGORY",
        data,
        category,
        inactive,
        active,
        action
    });
}