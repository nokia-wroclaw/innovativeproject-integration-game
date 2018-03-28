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

    // editCharacter() {
    //     this.setState.bind(this, {
    //         actors: ["sb else"],
    //         sportsmen: ["sb else 2"],
    //     });

    //     // console.log("it doesnt work");
    //     this.emit("change");
    // }

    getAll() {
        return this.state;
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_CHARACTER": {
                this.createCharacter(action.text);
                break;
            }
            case "EDIT_CHARACTER": {
                this.editCharacter();
                break;
            }
            default: {
                console.log("Choose another option");
            }
        }
    }
}

const listStore = new ListStore();
dispatcher.register(listStore.handleActions.bind(listStore));

export default listStore;