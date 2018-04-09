package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.os.Bundle
import android.os.CountDownTimer
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_round_view.*
import kotlinx.android.synthetic.main.activity_team_view.*

class RoundActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_round_view)

        button_round.text = ArrayRounds[indexOfRound]
        ArrayCategory = ArrayCategoryData.toMutableList()
        ArrayPeople = ArrayPeopleData.toMutableList()

        println("in round")
        button_round.setOnClickListener {
            Thread.sleep(1000)
            startActivity(Intent(this@RoundActivity, TeamActivity::class.java))

        }
    }
}