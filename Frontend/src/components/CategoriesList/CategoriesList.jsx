import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react'
import { Header, Wrapper, StyledAccordion } from './CategoriesList_styles';
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
        console.log(this.state.data)
        return (
            this.state.data.map((rowdata, index) => 
            <div key={index}>{
                <StyledAccordion activeIndex={index} index={index} name={rowdata.name}
                    characters={rowdata.people.map((subRowData, k) => {
                    return <div>
                        <Character character={subRowData} category={rowdata.name}/>
                    </div>
                })}
            />
            }</div>)
        )
    }

    componentWillMount() {
        ListStore.on("change", () => {
            this.setState({
                data: ListStore.getAll(),
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
                        <Icon onClick class='ui icon plus button'><i class='plus icon'></i></Icon> <br />
                        {this.renderCategories()}
                    </Accordion>
                </Wrapper>
            </div>
        );
    }
}

export default categoriesList;
