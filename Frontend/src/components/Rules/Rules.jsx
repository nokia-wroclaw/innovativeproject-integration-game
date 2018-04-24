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
                   Time's up nokia game is a  party game. It is a game for teams of two or more players, and is played in all rounds. Before the game begins, each player looks at several cards featuring famous actors, sport people and etc. Then chooses some of cards. They are shuffled to, and this cards of famous people is used for each of the game's rounds.
                   <br/><br/>
                   The game is played using a set between 10 and 40 of randomly chosen name cards. Cards are used throughout all rounds of the game. Gamer decides how long is rounds. Each team guess as many names as possible, with one player giving clues to his teammates. Players use words, sound effects and charades as they give their clues. The game is becoming more and more limited in subsequent rounds. On each team's turn, one member of the team is the Cluegiver and the rest are the Guessers.
                   <br/><br/>
                   <p><b>Description</b></p>
                   ROUND 1, the Cluegiver draws a name card and begins giving clues to his teammates (Guessers). The Cluegiver can sing, hum, point, charade, give full descriptions of the person, etc.
                   <br/><br/>
                   <p>One word</p>
                   ROUND 2, the Cluegiver may give only one word for each clue, which may be repeated as often as desired. Once the word is said, only non-verbal clues (sound effects, charades) may be given.
                   <br/><br/>
                   <p>Showing without speaking</p>
                   ROUND 3, the Cluegiver may not use any words at all. Only sounds and charades may be used for each clue.
                   <br/><br/>
                   <p>Pose</p>
                   ROUND 4, The Guesser starts with their eyes closed while the Cluegiver freezes in a pose depicting their clue. Once frozen, the Guesser opens their eyes and must give one guess.
                   <br/><br/>
                   The team with the highest score after all rounds is the winner.
                    <br/><br/>
                </Paragraph>
                <Footer>
                     
                </Footer>
            </Wrapper>
        </Container>
    );
  }
}

export default Rules;
