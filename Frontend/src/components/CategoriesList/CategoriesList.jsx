import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react'
import AccordionElement from '../../components/AccordionElement/AccordionElement';
import { Header, Wrapper } from './CategoriesList_styles';
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
                            <Character character={subRowData} category={rowdata.category}/>
                            <a href={'/categories/edit/' + rowdata.category + '/' + subRowData.id}> <Icon onClick class='ui icon caret down button'><i class='caret down icon'></i></Icon></a>
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
