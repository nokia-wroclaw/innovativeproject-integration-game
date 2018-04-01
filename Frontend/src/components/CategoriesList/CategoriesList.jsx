import React, { Component } from 'react';
import { Header, Wrapper, Category } from './CategoriesList_styles';
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

    editCharacter = () => {
        ListActions.editCharacter("katherine zeta johnes");
    }




    render() {
        return (
            <div>
                <Header>List of categories</Header>
                {/* <button onClick={this.editCharacter}>Edit!</button> */}
                <Wrapper>
                    {
                        Object.keys(this.state.categoriesList).map((category) => {
                            return <div>
                                        <Category>{category}</Category>
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
