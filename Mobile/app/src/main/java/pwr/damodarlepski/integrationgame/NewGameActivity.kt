package pwr.damodarlepski.integrationgame

import android.os.Bundle
import android.preference.PreferenceManager
import android.support.v7.app.AppCompatActivity
import android.view.Menu
import android.view.MenuItem
import kotlinx.android.synthetic.main.activity_new_game.*


class NewGameActivity : AppCompatActivity() {

    private fun loadRules() {
        val prefs = PreferenceManager.getDefaultSharedPreferences(this)

        val categories = prefs.getStringSet("categories", null)
        categories.iterator()
        val buildCategories = StringBuilder()
        for (element in categories) {
            buildCategories.append(element + " ")
        }
        textView_categories_value.text = buildCategories

        val time = prefs.getString("time_for_guessing", null)
        val buildTime = StringBuilder(time + " sec")
        textView_time_value.text = buildTime

        val rounds = prefs.getStringSet("rounds", null)
        val buildRounds = StringBuilder()
        for (element in rounds) {
            buildRounds.append(element + " ")
        }
        textView_rounds_value.text = buildRounds
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
    }

    override fun onResume() {
        super.onResume()

        loadRules()
    }
}
