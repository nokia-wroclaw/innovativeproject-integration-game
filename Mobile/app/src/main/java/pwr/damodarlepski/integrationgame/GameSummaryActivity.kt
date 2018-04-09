package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_game_summary_view.*

class GameSummaryActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_game_summary_view)

        points_team_one_text.text = teamOneCounter.toString()
        points_team_two_text.text = teamTwoCounter.toString()


        button_end_game.setOnClickListener {
            startActivity(Intent(this@GameSummaryActivity, MainMenuActivity::class.java))
        }

    }
}