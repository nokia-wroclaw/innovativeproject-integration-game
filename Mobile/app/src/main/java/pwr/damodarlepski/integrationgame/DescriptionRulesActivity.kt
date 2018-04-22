package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main_menu.*
import kotlinx.android.synthetic.main.activity_rules.*

class DescriptionRulesActivity : AppCompatActivity() {
    private val gameMechanics = GameMechanics()
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_rules)
        var Rules = StringBuilder()
        for (i in gameMechanics.getRoundDescriptionArray().indices) {
            Rules.append("\n")
            Rules.append(gameMechanics.getRoundDescriptionArray()[i])
            Rules.append("\n")
        }
        text_rules.text=Rules
    }
}