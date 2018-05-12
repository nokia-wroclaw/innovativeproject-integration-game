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
        this.state.data = state;
    }

    getAll() {
        return this.state.data;
    }

    handleActions(action) {
        switch(action.type) {
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
        return axios.get('https://integrationgame.herokuapp.com/api/presetWithAll')
        .then(response => response.data
        )
    }

    loadData() {
        this.fetchData().then(data => {
            this.setState(data);
            console.log(data);
            this.emit("change");
        });
    }
}

const listStore = new ListStore();
dispatcher.register(listStore.handleActions.bind(listStore));

export default listStore;