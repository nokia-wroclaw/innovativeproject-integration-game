import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react'
import {Header, PresetWrapper, StyledSecondAccordion, Wrapper} from './CategoriesList_styles';
import ListStore from '../../stores/listStore';
import Character from '../../components/Character/Character';
import AddCategoryButton from '../../components/AddCategoryButton/AddCategoryButton';
import { Title } from "./CategoriesList_styles";
import Preset from "../Preset/Preset";
import { StyledAccordion } from "../AccordionElement/AccordionElement_styles";
import AccordionElement from "../AccordionElement/AccordionElement";

class categoriesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ListStore.getAll(),
            activeIndex: null
        }
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex })
    };
    
    renderCategories() {
        const { activeIndex } = this.state;
        console.log(this.state.data);
        return (
            <StyledAccordion>
                {
                    this.state.data.map((preset, indexOfPreset) => {
                        return (
                            <StyledSecondAccordion>
                                <Accordion.Title
                                    active={activeIndex === this.props.activeIndex}
                                    index={this.props.index}
                                    onClick={this.handleClick}>
                                    <Title>
                                        <Icon name='dropdown' />
                                        {preset.name}
                                    </Title>
                                </Accordion.Title>

                                <Accordion.Content
                                    active={activeIndex === this.props.activeIndex}
                                >
                                    {
                                        preset.categories.map((category, indexOfCategory) => {
                                            return (
                                                <div key={indexOfCategory}>
                                                    <AccordionElement
                                                        activeIndex={indexOfCategory}
                                                        index={indexOfCategory}
                                                        name={category.name}
                                                        id={category.id}
                                                        characters={category.people.map((character, indexOfCharacter) => <Character character={character} category={category.name} />)}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </Accordion.Content>
                            </StyledSecondAccordion>
                        )
                    })
                }
                <PresetWrapper>
                    <Preset />
                </PresetWrapper>
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
