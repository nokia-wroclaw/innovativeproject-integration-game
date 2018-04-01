import dispatcher from '../dispatcher';
import React from 'react';
import EventEmmiter from 'events';
import InputForm from '../components/InputForm/InputForm';

class ComponentStore extends EventEmmiter {
    constructor(props) {
        super(props)
        this.state = {
            component: " ",
        };
    }

    setState = (state) => {
        this.state = {...this.state, ...state}
    }

    editComponent(name) {
        this.setState({
            component: name,
        });

        this.emit("change");
    }

    getAll() {
        return this.state;
    }

    handleActions(action) {
        switch(action.type) {
            case "EDIT_COMPONENT": {
                this.editComponent(action.name);
                console.log("edit");
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