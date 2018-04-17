import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react'
import Category from '../Category/Category';
import { StyledAccordion, StyledCategory, StyledContent, StyledTitle, Wrapper, Title } from './AccordionElement_styles';

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
                    <Wrapper>
                        <StyledTitle
                            active={activeIndex === this.props.activeIndex}
                            index={this.props.index}
                            onClick={this.handleClick}>
                            <Title>
                                <Icon name='dropdown' />
                                {this.props.name}
                            </Title>
                        </StyledTitle>
                        
                        <StyledContent
                            active={activeIndex === this.props.activeIndex}>
                            {this.props.characters.map((character) => {
                            return <p>{character}</p>;
                            })}
                        </StyledContent>
                    </Wrapper>
                    <StyledCategory id="icon">
                        <Category category={this.props.name} />
                    </StyledCategory>
                </StyledAccordion>
                
            </div>
       );
    }
 }

