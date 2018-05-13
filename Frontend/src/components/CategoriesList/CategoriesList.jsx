import React, {Component} from 'react';
import {Accordion} from 'semantic-ui-react'
import {Container, Header, Wrapper} from './CategoriesList_styles';
import ListStore from '../../stores/listStore';
import ExternalAccordion from "../ExternalAccordion/ExternalAccordion";
import AddPresetButton from "../AddPresetButton/AddPresetButton";

class categoriesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ListStore.getAll(),
        }
    }

    renderCategories() {
        return (
            <Container>
                <AddPresetButton />
                {this.state.data.map(preset => <ExternalAccordion preset={preset}/>)}
            </Container>
        )
    }

    componentWillMount() {
        ListStore.on("change", () => {
            this.setState({
                data: ListStore.getAll(),
            });
        });
    }

    render() {
        return (
            <div>
                <Header>List of categories</Header>
                <Wrapper>
                    <Accordion>
                        {this.renderCategories()}
                    </Accordion>
                </Wrapper>
            </div>
        );
    }
}

export default categoriesList;
