import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react'
import Category from '../Category/Category';
import { StyledAccordion, StyledCategory } from './AccordionElement_styles';

export default class AccordionElement extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <div>
                <StyledAccordion>
                    <div>
                        <Accordion.Title
                            active={activeIndex === this.props.activeIndex}
                            index={this.props.index}
                            onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            {this.props.name}
                        </Accordion.Title>
                        
                        <Accordion.Content
                            active={activeIndex === this.props.activeIndex}>
                            {this.props.characters.map((character) => {
                            return <p>{character}</p>;
                            })}
                        </Accordion.Content>
                    </div>
                    <StyledCategory>
                        <Category category={this.props.name} />
                    </StyledCategory>
                </StyledAccordion>
                
            </div>
       );
    }
 }

