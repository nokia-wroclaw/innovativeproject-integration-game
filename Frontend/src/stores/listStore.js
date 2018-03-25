import dispatcher from '../dispatcher';
const EventEmmiter = require('events');

class ListStore extends EventEmmiter {
    constructor(props) {
        super(props)
        this.state = {
            actors: ["Bradd Pitt", "ktos"],
            sportsmen: ["Lance Armstrong", "ktos"],
        };
    }

    createCharacter(name) {
        console.log("character is added: " + name);

        

        this.emit("change");
    }

    getAll() {
        return this.state;
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_CHARACTER": {
                this.createCharacter(action.text);
            }
        }
    }
}

const listStore = new ListStore();
dispatcher.register(listStore.handleActions.bind(listStore));

export default listStore;