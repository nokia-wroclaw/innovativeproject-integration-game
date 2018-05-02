import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react'
import { Header, Wrapper, StyledAccordion } from './CategoriesList_styles';
import ListStore from '../../stores/listStore';
import Character from '../../components/Character/Character';
import AddCategoryButton from '../../components/AddCategoryButton/AddCategoryButton';
import { Title } from "./CategoriesList_styles";

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
            <div>
                <Accordion.Title
                    active={activeIndex === this.props.activeIndex}
                    index={this.props.index}
                    onClick={this.handleClick}>
                    <Title>
                        <Icon name='dropdown' />
                        Default preset
                    </Title>
                </Accordion.Title>
                <Accordion.Content
                    active={activeIndex === this.props.activeIndex}
                >
                    {this.state.data.map((rowdata, index) =>
                    <div key={index}>{
                        <StyledAccordion activeIndex={index} index={index} name={rowdata.name} id={rowdata.id}
                                         characters={rowdata.people.map((subRowData, k) => {
                                             return <div>
                                                 <Character character={subRowData} category={rowdata.name}/>
                                             </div>
                                         })}
                        />
                    }</div>)}
                </Accordion.Content>
            </div>
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
                        <AddCategoryButton />
                        {this.renderCategories()}
                    </Accordion>
                </Wrapper>
            </div>
        );
    }
}

export default categoriesList;
