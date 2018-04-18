package pwr.damodarlepski.integrationgame

import java.io.Serializable

// TODO klasa do obsługi mechaniki gry, tak Krzysiu tu możesz wrzucać swoje zmienne :D

class GameMechanics : Serializable {

    var currentTeam = 1
    var teamOneScore = 0
    var teamTwoScore = 0

    var currentRound = 0
    val selectedRounds = listOf(2, 3, 4)
    val numberOfRounds = selectedRounds.size

    private val cardDeck = mutableListOf<Card>()
    var cardSet = mutableListOf<Card>()

    val roundDescription = arrayOf("Description \nIn round 1, the Cluegiver draws a name card and begins giving clues to his teammates (Guessers). The Cluegiver can sing, hum, point, charade, give full descriptions of the person, etc."
            , "One word \nIn round 2, the Cluegiver may give only one word for each clue, which may be repeated as often as desired. Once the word is said, only non-verbal clues (sound effects, charades) may be given."
            , "Showing without speaking \nIn round 3, the Cluegiver may not use any words at all. Only sounds and charades may be used for each clue. "
            , "Pose \nIn round 4, the Guesser starts with their eyes closed while the Cluegiver freezes in a pose depicting their clue. Once frozen, the Guesser opens their eyes and must give one guess.")

    fun getCurrentRoundDescription(): String {
        return roundDescription[selectedRounds[currentRound] - 1]
    }

    fun addCard(category: String, name: String, summary: String) {
        cardDeck.add(Card(category, name, summary))
    }

    fun fillCardSet() {
        cardSet = cardDeck
    }
}