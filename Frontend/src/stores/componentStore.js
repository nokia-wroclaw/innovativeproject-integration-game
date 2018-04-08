import dispatcher from '../dispatcher';
import React from 'react';
import EventEmmiter from 'events';
import data from "../components/CategoriesList/data";

class ComponentStore extends EventEmmiter {
    constructor(props) {
        super(props)
        //this.state = data;
        this.state = {
            data: " state",
            category: "category",
        }
    }

    setState = (state) => {
        this.state = {...this.state, ...state}
    }


    editComponent(data, category) {
        this.setState({
            data: data,
            category: category,
        });

        this.emit("change");
    }

    addComponent(value) {
        this.setState({
            value: value,
        });

        this.emit("change");
    }

    getAll() {
        return this.state;
    }

    handleActions(action) {
        switch(action.type) {
            case "EDIT_COMPONENT": {
                this.editComponent(action.data, action.category);
                break;
            }
            case "ADD_COMPONENT": {
                this.addComponent(action.value);
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