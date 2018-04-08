import dispatcher from '../dispatcher';
import EventEmmiter from 'events';

class ListStore extends EventEmmiter {
    constructor(props) {
        super(props)
        this.state = {
            actors: ["Bradd Pitt", "Johny Deep"],
            sportsmen: ["Lance Armstrong", "Leo Messi"],
        };
    }

    setState = (state) => {
        this.state = {...this.state, ...state}
    }

    createCharacter(name) {
        console.log("character is added: " + name);      

        this.emit("change");
    }

    editCharacter(name) {
        this.setState({
            actors: [name],
        });

        this.emit("change");
    }

    addCharacter(name) {
        this.setState({
            actors: [name],
        });

        this.emit("change");
    }

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
                this.editCharacter(action.name);
                break;
            }
            case "ADD_CHARACTER": {
                this.addCharacter(action.name);
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