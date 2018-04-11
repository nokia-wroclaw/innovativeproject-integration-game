package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.Menu
import android.view.MenuItem
import kotlinx.android.synthetic.main.activity_main_menu.*

var teamOneCounter = 0
var teamTwoCounter = 0

val ArrayCategoryData: MutableList<String> = mutableListOf("Sport", "Actor",  "Musiacian", "Dance", "Writers")
val ArrayPeopleData: MutableList<String> = mutableListOf("Robert Lewandowski", "Cezary Pazura",  "Selena Gomez", "Katarzyna Cichopek", "Andrzej Sapkowski")

var ArrayCategory = ArrayCategoryData.toMutableList()
var ArrayPeople = ArrayPeopleData.toMutableList()

var indexOfRound = 0
val ArrayRounds = arrayOf("Description", "One word", "Showing without speaking", "Pose")

var team_name = ""

class MainMenuActivity : AppCompatActivity() {

    override fun onCreateOptionsMenu(menu: Menu): Boolean {

        val inflater = menuInflater
        inflater.inflate(R.menu.menu_bar, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {

        val menu = MenuBar()
        when (item.itemId)
        {
            R.id.menu_rules -> menu.goToRulesSettings(this)
        }
        return super.onOptionsItemSelected(item)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main_menu)

        teamOneCounter = 0
        teamTwoCounter = 0
        ArrayCategory = ArrayCategoryData.toMutableList()
        ArrayPeople = ArrayPeopleData.toMutableList()
        indexOfRound = 0
        team_name = ""

        button_new_game.setOnClickListener {
            startActivity(Intent(this, NewGameActivity::class.java))
        }
    }
}
