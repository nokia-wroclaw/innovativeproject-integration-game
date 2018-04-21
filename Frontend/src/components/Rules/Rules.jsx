import React, { Component } from 'react';
import { Wrapper, Header, Paragraph, Container, Footer } from './Rules_styles';

class Rules extends Component {
  render() {
    return (
        <Container>
            <Wrapper>
                <Header>RULES</Header>
                <br/>
                <Paragraph>
                    1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Est lorem ipsum dolor sit amet consectetur adipiscing elit. 
                    Blandit turpis cursus in hac habitasse platea dictumst quisque. 
                    <br/><br/>
                    2. Molestie at elementum eu facilisis sed odio morbi quis commodo. Dapibus ultrices in iaculis 
                    nunc. Urna cursus eget nunc scelerisque viverra. Nunc eget lorem dolor sed viverra ipsum nunc 
                    aliquet. 
                    <br/><br/>
                    3. Vestibulum sed arcu non odio euismod. Eget nunc lobortis mattis aliquam faucibus purus in 
                    massa tempor. Interdum consectetur libero id faucibus. Urna neque viverra justo nec ultrices 
                    dui sapien eget. 
                    <br/><br/>
                    4. Enim facilisis gravida neque convallis a cras semper auctor neque. Quam vulputate dignissim 
                    suspendisse in est ante in. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. 
                    Sit amet aliquam id diam maecenas ultricies mi. At volutpat diam ut venenatis.
                    <br/><br/>
                    5. Cras pulvinar mattis nunc sed blandit. Diam in arcu cursus euismod quis viverra nibh. Tellus 
                    elementum sagittis vitae et leo. Ipsum dolor sit amet consectetur adipiscing elit. 
                    <br/><br/>
                    6.Nisi porta lorem mollis aliquam ut porttitor leo a. Sed id semper risus in hendrerit gravida 
                    rutrum quisque non. Nullam non nisi est sit amet. Ut sem nulla pharetra diam sit amet nisl suscipit. 
                    <br/><br/>
                    7.Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Facilisi etiam dignissim 
                    diam quis enim. Dui accumsan sit amet nulla facilisi morbi tempus. Id diam maecenas ultricies mi.
                </Paragraph>
                <Footer>
                     
                </Footer>
            </Wrapper>
        </Container>
    );
  }
}

export default Rules;
