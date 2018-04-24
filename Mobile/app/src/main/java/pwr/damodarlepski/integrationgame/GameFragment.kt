
package pwr.damodarlepski.integrationgame

import android.graphics.Color
import android.os.Bundle
import android.os.CountDownTimer
import android.preference.PreferenceManager
import android.support.v4.app.Fragment
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ProgressBar
import android.widget.TextView
import java.util.*

class GameFragment : Fragment() {

    private var allowedSkips = 2

    private lateinit var timer: CountDownTimer

    val TAG = "FragmentGame"

    private fun nextTeam(gameMechanics: GameMechanics) {

        if (gameMechanics.currentTeam == 1) {
            ++gameMechanics.currentTeam
        } else {
            --gameMechanics.currentTeam
        }

        val transaction = fragmentManager?.beginTransaction()
        val fragment = TeamFragment()

        val passBundle = Bundle()
        passBundle.putSerializable("GAME_MECHANICS", gameMechanics)
        fragment.arguments = passBundle

        transaction?.replace(R.id.fragment_holder, fragment)
        transaction?.addToBackStack(null)
        transaction?.commit()
    }

    fun rand(to: Int): Int {
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

    fun pointsCounter(gameMechanics: GameMechanics) {
        if (gameMechanics.currentTeam == 1) {
            gameMechanics.teamOneScore++
        } else {
            gameMechanics.teamTwoScore++
        }
    }

    fun nextPlayer(gameMechanics: GameMechanics) {
        if (gameMechanics.cardSet.size > 0) {
            nextTeam(gameMechanics)
        } else {
            val transaction = fragmentManager?.beginTransaction()
            val fragment = SummaryFragment()

            val passBundle = Bundle()
            passBundle.putSerializable("GAME_MECHANICS", gameMechanics)
            fragment.arguments = passBundle

            transaction?.replace(R.id.fragment_holder, fragment)
            transaction?.addToBackStack(null)
            transaction?.commit()
        }
    }

    fun startTimer(gameMechanics: GameMechanics, view: View) {

        val timeForGuessing = PreferenceManager.getDefaultSharedPreferences(context).getString("time_for_guessing", null).toLong()

        val progress = view.findViewById(R.id.time_progressBar) as ProgressBar
        progress.max = timeForGuessing.toInt()

        timer = object : CountDownTimer((timeForGuessing * 1000), 1000) {
            override fun onTick(millisUntilFinished: Long) {

                val timeView = view.findViewById(R.id.time_text) as TextView
                timeView.text = (millisUntilFinished / 1000).toString()
                progress.progress += 1

                val percentageTime = millisUntilFinished / 1000 * 100 / timeForGuessing
                println(percentageTime)
                progress.progressDrawable.setColorFilter(Color.rgb(255 - (255 * percentageTime.toInt() / 100), 255 * percentageTime.toInt() / 100, 0), android.graphics.PorterDuff.Mode.SRC_IN)
            }

            override fun onFinish() {
                nextPlayer(gameMechanics)
            }
        }.start()
    }

    fun stopTimer() {
        timer.cancel()
    }

    fun getNewCard(gameMechanics: GameMechanics, view: View) {
        Log.v("CARD_SET", gameMechanics.cardSet.size.toString())
        if (gameMechanics.cardSet.size > 0) {
            val index = rand(gameMechanics.cardSet.size - 1)
            val category = view.findViewById(R.id.category_text) as TextView
            category.text = gameMechanics.cardSet[index].category
            val people = view.findViewById(R.id.people_text) as TextView
            people.text = gameMechanics.cardSet[index].name
            gameMechanics.cardSet.removeAt(index)
        }
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val getBundle = arguments
        val gameMechanics = getBundle?.getSerializable("GAME_MECHANICS") as GameMechanics

        val view = inflater.inflate(R.layout.fragment_game, container, false)

        getNewCard(gameMechanics, view)
        startTimer(gameMechanics, view)

        val good = view.findViewById(R.id.button_good) as Button
        good.setOnClickListener {

            stopTimer()
            pointsCounter(gameMechanics)
            nextPlayer(gameMechanics)
        }

        val jump = view.findViewById(R.id.button_jump) as Button
        jump.setOnClickListener {

            if (allowedSkips > 0) {
                allowedSkips--
                //nextCardOrNewRound()
                getNewCard(gameMechanics, view)
            } else {
                jump.setBackgroundResource(R.drawable.rounded_corners_skip_gray)
            }
        }
        return view
    }
}