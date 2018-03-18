import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
import { Wrapper } from './Categories_styles';
import { TitlePage2 } from './Categories_styles';


import { Accordion, Icon } from 'semantic-ui-react'



class Categories extends Component {
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
            <Container>
                <Wrapper>
                <TitlePage2>
                Categories
                </TitlePage2>
                    <Accordion styled>
                      <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                       <Icon name='dropdown' />
                       Actors
                       </Accordion.Title>
                       <Accordion.Content active={activeIndex === 0}>
                       <p>
                       Brad Pitt
                       </p>
                       <p>
                       Leonardo DiCaprio
                       </p>
                       <p>
                       Al Pacino
                       </p>
                      </Accordion.Content>

                      <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                       <Icon name='dropdown' />
                       Sportsmen
                       </Accordion.Title>
                       <Accordion.Content active={activeIndex === 1}>
                       <p>
                       Justyna Kowalczyk
                       </p>
                       <p>
                       Adam Małysz
                       </p>
                       <p>
                       Kamil Stoch
                       </p>
                       </Accordion.Content>

                      </Accordion>
                </Wrapper>


            </Container>


                       );
            }
 }

export default Categories;

