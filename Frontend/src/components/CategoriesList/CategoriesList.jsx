import React, { Component } from 'react';
import { Header, Wrapper } from './CategoriesList_styles';
import ListStore from '../../stores/listStore';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = ListStore.getAll();
    }

    render() {
        return (
            <div>
                <Header>List of categories</Header>
                <Wrapper>
                    {
                        Object.keys(this.state).map((category) => {
                            return <div>
                                        <h1>{category}</h1>
                                        {this.state[category].map((character) => {
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
