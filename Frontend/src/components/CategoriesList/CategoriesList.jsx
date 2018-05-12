import React, {Component} from 'react';
import { Accordion } from 'semantic-ui-react'
import {Header, Wrapper} from './CategoriesList_styles';
import ListStore from '../../stores/listStore';
import {StyledAccordion} from "../AccordionElement/AccordionElement_styles";
import ExternalAccordion from "../ExternalAccordion/ExternalAccordion";

class categoriesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ListStore.getAll(),
        }
    }

    renderCategories() {
        return (
            <StyledAccordion>
                {
                    this.state.data.map((preset, indexOfPreset) => {
                        return (
                            <ExternalAccordion preset={preset}/>
                        )
                    })
                }

            </StyledAccordion>
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
