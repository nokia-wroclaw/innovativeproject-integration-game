import dispatcher from '../dispatcher';
import React from 'react';
import EventEmmiter from 'events';

class ComponentStore extends EventEmmiter {
    constructor(props) {
        super(props)
        this.state = {
            value: " ",
        };
    }

    setState = (state) => {
        this.state = {...this.state, ...state}
    }

    editComponent(value) {
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
                this.editComponent(action.value);
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