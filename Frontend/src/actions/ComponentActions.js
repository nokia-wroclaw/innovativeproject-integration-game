import dispatcher from '../dispatcher';

export function editComponent(data, category, inactive) {
    dispatcher.dispatch({
        type: "EDIT_COMPONENT",
        data,
        category,
        inactive,
    });
}

export function editCategory(category, inactive) {
    dispatcher.dispatch({
        type: "EDIT_CATEGORY",
        category,
        inactive,
    });
}