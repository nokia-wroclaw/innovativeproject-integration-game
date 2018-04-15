package pwr.damodarlepski.integrationgame

// TODO klasa do obsługi mechaniki gry, tak Krzysiu tu możesz wrzucać swoje zmienne :D

class GameMechanics {
    private val cardSet = mutableListOf<Card>()

    fun addCard(category: String, name: String, summary: String) {
        cardSet.add(Card(category, name, summary))
    }
}