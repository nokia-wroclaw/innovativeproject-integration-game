import React, { Component } from 'react';
import { Accordion } from 'semantic-ui-react'
import AccordionElement from '../../components/AccordionElement/AccordionElement';
import { Header, Wrapper, Category } from './CategoriesList_styles';
import ListStore from '../../stores/listStore';
import * as ListActions from '../../actions/ListActions';
import Character from '../../components/Character/Character';



class categoriesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ListStore.getAll(),
        }
    }
    
    renderCategories() {
        return (
            this.state.data.map((rowdata, index) =>
                <div>{
                    <AccordionElement activeIndex={index} index={index} name={rowdata.category}
                        characters={rowdata.people.map((subRowData, k) => {
	                    return <div>
                            <Character cos={subRowData} />
                            {/* <a href={'/categories/edit/' + rowdata.category + '/' + subRowData.id}>{subRowData.name + " " + subRowData.surname}</a> */}
                        </div>
                    })}
                />
            }</div>)
        )
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

    addCharacter = () => {
            ListActions.addCharacter("katherine zeta johnes");
        }

    render() {
        return (
            <div>
                <Header>List of categories</Header>
                <Wrapper>
                    <Accordion>
                    {this.renderCategories()}
                    </Accordion>
                    {/* {
                        Object.keys(this.state.data).map((category) => {
                            return <div>
                                        <Category>{category}</Category>
                                        {this.state.categoriesList[category].map((character) => {
                                            return <Character character={character} />;
                                        })}
                                        <br/>
                                    </div>
                        })
                    } */}
                </Wrapper>
            </div>
        );
    }
}

export default categoriesList;
