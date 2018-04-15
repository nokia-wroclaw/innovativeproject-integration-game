package pwr.damodarlepski.integrationgame

import android.os.Bundle
import android.support.v7.app.AppCompatActivity

var teamOneCounter = 0
var teamTwoCounter = 0

val ArrayCategoryData: MutableList<String> = mutableListOf("Sport", "Actor", "Musiacian", "Dance", "Writers")
val ArrayPeopleData: MutableList<String> = mutableListOf("Robert Lewandowski", "Cezary Pazura", "Selena Gomez", "Katarzyna Cichopek", "Andrzej Sapkowski")

var ArrayCategory = ArrayCategoryData.toMutableList()
var ArrayPeople = ArrayPeopleData.toMutableList()

var indexOfRound = 0
val ArrayRounds = arrayOf("Description", "One word", "Showing without speaking", "Pose")

var team_name = ""

class GameActivity : AppCompatActivity() {
    private val manager = supportFragmentManager

    val gameMechanics = GameMechanics()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_game)

        gameMechanics.addCard("Sport", "Robert Lewandowski", "")
        gameMechanics.addCard("Actor", "Cezary Pazura", "")
        gameMechanics.addCard("Musician", "Selena Gomez", "")
        gameMechanics.addCard("Dance", "Katarzyna Cichopek", "")
        gameMechanics.addCard("Writer", "Andrzej Sapkowski", "")

        teamOneCounter = 0
        teamTwoCounter = 0
        ArrayCategory = ArrayCategoryData.toMutableList()
        ArrayPeople = ArrayPeopleData.toMutableList()
        indexOfRound = 0
        team_name = ""

        val transaction = manager.beginTransaction()
        val fragment = RoundFragment()
        transaction.replace(R.id.fragment_holder, fragment)
        transaction.addToBackStack(null)
        transaction.commit()

    }
}