package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.os.Bundle
import android.preference.PreferenceManager
import android.support.v7.app.AppCompatActivity
import android.view.Menu
import android.view.MenuItem
import android.widget.NumberPicker
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_new_game.*


class NewGameActivity : AppCompatActivity(), NumberPicker.OnValueChangeListener {

    private lateinit var gameMechanics: GameMechanics

    private fun showNumberPicker() {
        val newFragment = NumberPickerDialog()
        newFragment.setValueChangeListener(this)
        newFragment.show(fragmentManager, "number picker")
    }

    override fun onValueChange(p0: NumberPicker, p1: Int, p2: Int) {
        Toast.makeText(this, "Selected number of players: " + p0.value, Toast.LENGTH_SHORT).show()
//        editText_players.setText(p0.value.toString())
    }

    private fun loadRules(gameMechanics: GameMechanics) {
        val prefs = PreferenceManager.getDefaultSharedPreferences(this)

//        val categories = prefs.getStringSet("categories", null)
        val buildCategories = StringBuilder()
//        for (element in gameMechanics.selectedCategoriesList) {
//            buildCategories.append(element + "\n")
//        }

        for (i in 0 until gameMechanics.selectedCategoriesList.size) {
            if (i < gameMechanics.selectedCategoriesList.size - 1) buildCategories.append(gameMechanics.selectedCategoriesList[i] + "\n")
            if (i == gameMechanics.selectedCategoriesList.size - 1) buildCategories.append(gameMechanics.selectedCategoriesList[i])
        }
//        for (element in categories) {
//            buildCategories.append(gameMechanics.categoryLookupMap[element.toString().toInt()] + "\n")
//        }
        textView_categories_value.text = buildCategories

        val time = prefs.getString("time_for_guessing", "30 sec")
        val buildTime = StringBuilder("$time sec")
        textView_time_value.text = buildTime

        gameMechanics.sortRounds(this)

        val rounds = prefs.getStringSet("rounds", null)
        textView_rounds_value.text = rounds.size.toString()

        val numberOfCards = prefs.getString("total_number_of_cards", "40")
        textView_number_of_cards_value.text = numberOfCards.toString()
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {

        val inflater = menuInflater
        inflater.inflate(R.menu.menu_bar, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {

        val menu = MenuBar()
        when (item.itemId) {
            R.id.menu_rules -> menu.goToRulesSettings(this)
        }
        return super.onOptionsItemSelected(item)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_new_game)

        gameMechanics = intent.getSerializableExtra("GAME_MECHANICS") as GameMechanics
        loadRules(gameMechanics)

//        editText_players.setOnClickListener {
//            showNumberPicker()
//        }
        table_rules_overview.setOnClickListener {
            val menu = MenuBar()
            menu.goToRulesSettings(this)
        }

        button_start_game.setOnClickListener {
            startActivity(Intent(this, GameActivity::class.java).putExtra("GAME_MECHANICS", gameMechanics))
        }
    }

    override fun onResume() {
        super.onResume()

        loadRules(gameMechanics)
    }
}
