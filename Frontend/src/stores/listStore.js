import dispatcher from '../dispatcher';
import EventEmmiter from 'events';
import axios from 'axios';

class ListStore extends EventEmmiter {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        };
    }

    setState = (state) => {
        // this.state = {...this.state, ...state}
        this.state.data = state;
    }

    createCharacter(name) {    
        console.log(this.state);
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
        return this.state.data;
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
            case "FETCH_DATA": {
                this.loadData();
                break;
            }
            default: {
                console.log("Choose another option");
            }
        }
    }

    fetchData()
    {
        return axios.get('/api/categories')
        .then(response => response.data
        )
    }

    loadData() {
        this.fetchData().then(data => {
            this.setState(data);
            this.emit("change");
        });
    }
}

const listStore = new ListStore();
dispatcher.register(listStore.handleActions.bind(listStore));

export default listStore;