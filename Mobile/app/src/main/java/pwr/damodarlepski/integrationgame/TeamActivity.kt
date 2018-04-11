package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.os.Bundle
import android.os.CountDownTimer
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_team_view.*


class TeamActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_team_view)

        if (button_team_start.text == "Team One") {
            team_name = "Team Two"
        } else {
            team_name = "Team One"
        }


        button_team_start.text = team_name


        button_team_start.setOnClickListener {
            object : CountDownTimer(3000, 1000) {

                override fun onTick(millisUntilFinished: Long) {
                    button_team_start.text = (millisUntilFinished / 1000).toString()
                }

                override fun onFinish() {
                    startActivity(Intent(this@TeamActivity, GameActivity::class.java))
                }
            }.start()
        }
    }
}