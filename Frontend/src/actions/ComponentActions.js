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

export function addCategory(data, category, inactive, active, action, presetId) {
    dispatcher.dispatch({
        type: "ADD_CATEGORY",
        data,
        category,
        inactive,
        active,
        action,
        presetId
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

export function editPreset(data, inactive, active, action, presetId) {
    dispatcher.dispatch({
        type: "EDIT_PRESET",
        data,
        inactive,
        active,
        action,
        presetId
    });
}

export function addPreset(data, inactive, active, action) {
    dispatcher.dispatch({
        type: "ADD_PRESET",
        data,
        inactive,
        active,
        action
    });
}

export function deletePreset(action, presetId) {
    dispatcher.dispatch({
        type: "DELETE_PRESET",
        action,
        presetId
    });
}