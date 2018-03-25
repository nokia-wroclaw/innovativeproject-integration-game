import React, { Component } from 'react';
import { Header, Wrapper } from './CategoriesList_styles';
import ListStore from '../../stores/listStore';
import * as ListActions from '../../actions/ListActions';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoriesList: ListStore.getAll(),
        }
    }

    componentWillMount() {
        ListStore.on("change", () => {
            this.setState({
                categoriesList: ListStore.getAll(),
            });
        });
    }

    createCharacter() {
        ListActions.createCharacter(Date.now());
    }

    render() {
        return (
            <div>
                <Header>List of categories</Header>
                <button onClick={this.createCharacter.bind(this)}>Create!</button>
                <Wrapper>
                    {
                        Object.keys(this.state.categoriesList).map((category) => {
                            return <div>
                                        <h1>{category}</h1>
                                        {this.state.categoriesList[category].map((character) => {
                                            return <p>{character}</p>
                                        })}
                                        <br/>
                                    </div>
                        })
                    }
                </Wrapper>
            </div>
        );
    }
}

export default Navbar;
