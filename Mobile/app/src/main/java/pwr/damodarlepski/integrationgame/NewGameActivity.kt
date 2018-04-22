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

    private fun showNumberPicker() {
        val newFragment = NumberPickerDialog()
        newFragment.setValueChangeListener(this)
        newFragment.show(fragmentManager, "number picker")
    }

    override fun onValueChange(p0: NumberPicker, p1: Int, p2: Int) {
        Toast.makeText(this, "Selected number of players: " + p0.value, Toast.LENGTH_SHORT).show()
        editText_players.setText(p0.value.toString())
    }

    private fun loadRules() {
        val prefs = PreferenceManager.getDefaultSharedPreferences(this)

        val categories = prefs.getStringSet("categories", null)
        val buildCategories = StringBuilder()
        for (element in categories) {
            buildCategories.append("$element\n")
        }
        textView_categories_value.text = buildCategories

        val time = prefs.getString("time_for_guessing", null)
        val buildTime = StringBuilder("$time sec")
        textView_time_value.text = buildTime

        val rounds = prefs.getStringSet("rounds", null)
        textView_rounds_value.text = rounds.size.toString()
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

        loadRules()

        editText_players.setOnClickListener {
            showNumberPicker()
        }

        button_start_game.setOnClickListener {
            startActivity(Intent(this@NewGameActivity, GameActivity::class.java))
        }
    }

    override fun onResume() {
        super.onResume()

        loadRules()
    }
}
