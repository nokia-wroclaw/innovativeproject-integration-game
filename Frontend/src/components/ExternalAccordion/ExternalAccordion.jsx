import React, {Component} from 'react';
import {Accordion} from 'semantic-ui-react'
import {PresetWrapper, Title} from "../CategoriesList/CategoriesList_styles";
import Preset from "../Preset/Preset";
import {StyledAccordion, Wrapper} from "../AccordionElement/AccordionElement_styles";
import AccordionElement from "../AccordionElement/AccordionElement";
import Character from "../Character/Character";
import Icon from "semantic-ui-react/dist/es/elements/Icon/Icon";
import {Container} from "./ExternalAccordion_styles";


export default class ExternalAccordion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: null
        }
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex })
    };

    render() {
        const { activeIndex } = this.state;
        return (
            <Container>
                <StyledAccordion>
                    <Wrapper>
                        <Accordion.Title
                            active={activeIndex === this.props.activeIndex}
                            index={this.props.index}
                            onClick={this.handleClick}>
                            <Title>
                                <Icon name='dropdown' />
                                {this.props.preset.name}
                            </Title>
                        </Accordion.Title>

                        <Accordion.Content
                            active={activeIndex === this.props.activeIndex}
                            style={{marginLeft: 20 + 'px'}}
                        >
                            {
                                this.props.preset.categories.map((category, indexOfCategory) => {
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
                    </Wrapper>
                    <PresetWrapper>
                        <Preset presetId={this.props.preset.id}/>
                    </PresetWrapper>
                </StyledAccordion>
            </Container>
        )
    }
}

