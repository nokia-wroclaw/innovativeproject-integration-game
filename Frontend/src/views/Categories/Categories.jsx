import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
import { Wrapper } from './Categories_styles';
import { TitlePage2 } from './Categories_styles';
import { Accordion } from 'semantic-ui-react'
import AccordionElement from '../../components/AccordionElement/AccordionElement';
import data from './data.json';

export default class Categories extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: data
        };
    }

    renderCategories() {
        return (

            this.state.data.map((rowdata, index) =>
                <div>
                    {
                        <AccordionElement activeIndex={index} index={index} name={rowdata.category}
                                          names={rowdata.people.map((subRowData, k) => {
                                                  return subRowData.name + " " + subRowData.surname + " " + ((subRowData.nickname == null) ? ("\n") : (subRowData.nickname + "\n"))
                                              }
                                          )}/>


                    }
                </div>)
        )
    }

    render() {
        return (
            <Container>
                <Wrapper>
                    <Accordion styled>
                        <TitlePage2>
                            Categories
                        </TitlePage2>
                        {this.renderCategories()}
                    </Accordion>
                </Wrapper>
            </Container>
        );
    }
}