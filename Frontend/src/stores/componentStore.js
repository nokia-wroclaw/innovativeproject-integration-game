import dispatcher from '../dispatcher';
import React from 'react';
import EventEmmiter from 'events';
import data from "../components/CategoriesList/data";
import axios from 'axios';

class ComponentStore extends EventEmmiter {
    constructor(props) {
        super(props)
        //this.state = data;
        this.state = {
            data: " state",
            category: "category",
            inactive: [""],
            active: [""],
            action: "action",
            id: "0"
        }
    }

    setState = (state) => {
        this.state = {...this.state, ...state}
    }


    editComponent(data, category, inactive, active, action) {
        this.setState({
            data: data,
            category: category,
            inactive: inactive,
            active: active,
            action: action
        });

        this.emit("change");
    }

    editCategory(data, category, inactive, active, action, id) {
        this.setState({
            data: data,
            category: category,
            inactive: inactive,
            active: active,
            action: action,
            id: id
        });

        this.emit("change");
    }

    addCategory(data, category, inactive, active, action) {
        this.setState({
            data: data,
            category: category,
            inactive: inactive,
            active: active,
            action: action
        });

        this.emit("change");
    }

    addCharacter(data, category, inactive, active, action, id) {
        this.setState({
            data: data,
            category: category,
            inactive: inactive,
            active: active,
            action: action,
            id: id
        });

        this.emit("change");
    }

    getAll() {
        return this.state;
    }

    handleActions(action) {
        switch(action.type) {
            case "EDIT_COMPONENT": {
                this.editComponent(action.data, action.category, action.inactive, action.active, action.action);
                break;
            }
            case "EDIT_CATEGORY": {
                this.editCategory(action.data, action.category, action.inactive, action.active, action.action, action.id);
                break;
            }
            case "ADD_CATEGORY": {
                this.addCategory(action.data, action.category, action.inactive, action.active, action.action);
                break;
            }
            case "ADD_CHARACTER": {
                this.addCharacter(action.data, action.category, action.inactive, action.active, action.action, action.id);
                break;
            }
            default: {
                console.log("Choose another option");
            }
        }
    }
}

const componentStore = new ComponentStore();
dispatcher.register(componentStore.handleActions.bind(componentStore));

export default componentStore;