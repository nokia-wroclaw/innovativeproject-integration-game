package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import java.util.*
import android.os.CountDownTimer
import android.preference.PreferenceManager
import kotlinx.android.synthetic.main.activity_game_view.*

class GameActivity : AppCompatActivity() {

    private var dummy: Int = 1
    private var index = 0
    private var counter = 0
    private fun timeOfRound() {

        val prefs = PreferenceManager.getDefaultSharedPreferences(this)
        val time = prefs.getString("time_for_guessing", null)
        counter = time.toInt()
        time_progressBar.max = counter

        object : CountDownTimer((counter * 1000).toLong(), 1000) {
            override fun onTick(millisUntilFinished: Long) {
                time_text.text = (millisUntilFinished / 1000).toString()
                time_progressBar.progress = ++dummy
            }

            override fun onFinish() {
                startActivity(Intent(this@GameActivity, TeamActivity::class.java))
            }
        }.start()
    }

    private fun rand(to: Int): Int {
        val index: Int
        if (to == 0)
            index = 0
        else {
            val from = 0
            val random = Random()
            index = random.nextInt(to - from) + from
        }
        return index
    }


    private fun getNewPeople(): Int {
        val index: Int
        if (ArrayPeople.size > 0) {
            index = rand((ArrayPeople.size) - 1)
            category_text.text = ArrayCategory[index]
            people_text.text = ArrayPeople[index]
        } else
            index = -1

        return index
    }

    private fun removePeople(index: Int) {
        ArrayCategory.removeAt(index)
        ArrayPeople.removeAt(index)
    }

    private fun counterOfPoints() {
        if (team_name == "Team One") {
            teamOneCounter++
        } else {
            teamTwoCounter++
        }
    }

    private fun setNewRoundOrSummary() {
        val prefs = PreferenceManager.getDefaultSharedPreferences(this)
        val rounds = prefs.getStringSet("rounds", null)

        val number = rounds.toString()[1]
        println(number.toString()+" rounds size")
        println(indexOfRound.toString()+" rounds idex rounds size")
        println(indexOfRound < number.toString().toInt())
        if (indexOfRound < number.toString().toInt()) {
            println("if")
            println(number.toString()+" rounds size")
            println(indexOfRound.toString()+" rounds idex rounds size")
            startActivity(Intent(this@GameActivity, RoundActivity::class.java))

        } else{
            println("else")
            startActivity(Intent(this@GameActivity, GameSummaryActivity::class.java))
        }
    }

    private fun newPeopleOrNewRound() {
        removePeople(index)
        if (ArrayPeople.size == 0)
            setNewRoundOrSummary()
        else
            index = getNewPeople()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_game_view)

        index = getNewPeople()

        timeOfRound()

        button_good.setOnClickListener {

            counterOfPoints()
            newPeopleOrNewRound()
        }

        button_jump.setOnClickListener {

            newPeopleOrNewRound()
        }
    }
}