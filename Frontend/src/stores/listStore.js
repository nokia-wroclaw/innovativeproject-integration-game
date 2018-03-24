// import { EventEmmiter } from "events";
const EventEmmiter = require('events');

class ListStore extends EventEmmiter {
    constructor(props) {
        super(props)
        this.categoriesList = {
            actors: ["Bradd Pitt", "ktos"],
            sportsmen: ["Lance Armstrong", "ktos"],
        };
    }

    getAll() {
        return this.categoriesList;
    }
}

const listStore = new ListStore();

export default listStore;