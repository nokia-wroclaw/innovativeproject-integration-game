import dispatcher from '../dispatcher';
import EventEmmiter from 'events';

class ListStore extends EventEmmiter {
    constructor(props) {
        super(props)
        this.state = {
            actors: ["Bradd Pitt", "ktos"],
            sportsmen: ["Lance Armstrong", "ktos"],
        };
    }

    setState = (state) => {
        this.state = {...this.state, ...state}
    }

    createCharacter(name) {
        console.log("character is added: " + name);      

        this.emit("change");
    }

    editCharacter = () => {
        console.log(this.setState);
        this.setState({
            actors: ["sb else"],
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