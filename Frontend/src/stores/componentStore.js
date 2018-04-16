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
        }
    }

    setState = (state) => {
        this.state = {...this.state, ...state}
    }


    editComponent(data, category, inactive, active) {
        this.setState({
            data: data,
            category: category,
            inactive: inactive,
            active: active,
        });

        axios.get('localhost:8000/api/categories')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error.request);
            });

        this.emit("change");
    }

    editCategory(data, category, inactive, active) {
        this.setState({
            data: data,
            category: category,
            inactive: inactive,
            active: active,
        });

        this.emit("change");
    }

    getAll() {
        return this.state;
    }

    handleActions(action) {
        switch(action.type) {
            case "EDIT_COMPONENT": {
                this.editComponent(action.data, action.category, action.inactive, action.active);
                break;
            }
            case "EDIT_CATEGORY": {
                this.editCategory(action.data, action.category, action.inactive, action.active);
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