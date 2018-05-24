
package pwr.damodarlepski.integrationgame

import android.annotation.SuppressLint
import android.graphics.Color
import android.media.MediaPlayer
import android.os.Bundle
import android.os.CountDownTimer
import android.preference.PreferenceManager
import android.support.v4.app.Fragment
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import java.util.*
import android.view.GestureDetector
import android.widget.*
import kotlinx.android.synthetic.main.fragment_game.*
import android.widget.Toast

class GameFragment : Fragment() {

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

        var mp= MediaPlayer.create(this.context,R.raw.music)

        timer = object : CountDownTimer((timeForGuessing * 1000), 1000) {
            override fun onTick(millisUntilFinished: Long) {

                val timeView = view.findViewById(R.id.time_text) as TextView
                timeView.text = (millisUntilFinished / 1000).toString()
                progress.progress += 1

                //start music
                if(progress.progress==15)
                    mp.start()

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
        } else {
            stopTimer()
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

    fun skip(gameMechanics: GameMechanics, view: View){
        if(gameMechanics.currentTeam==1){
            if (gameMechanics.getAllowedSkipsOne() > 0) {
               gameMechanics.decrementedAllowedSkipsOne()
                getNewCard(gameMechanics, view)
            }
            else {
                Toast.makeText(getActivity(), "Skip option is blocked", Toast.LENGTH_SHORT).show()
            }
        }
        else{
                if (gameMechanics.getAllowedSkipsTwo() > 0) {
                    gameMechanics.decrementedAllowedSkipsTwo()
                    getNewCard(gameMechanics, view)
                }
                else {
                    Toast.makeText(getActivity(), "Skip option is blocked", Toast.LENGTH_SHORT).show()
                }
            }
    }

    fun good(gameMechanics: GameMechanics, view: View){
        pointsCounter(gameMechanics)
        getNewCard(gameMechanics, view)
    }


    @SuppressLint("ClickableViewAccessibility")
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val getBundle = arguments
        val gameMechanics = getBundle?.getSerializable("GAME_MECHANICS") as GameMechanics

        val view = inflater.inflate(R.layout.fragment_game, container, false)


        getNewCard(gameMechanics, view)
        startTimer(gameMechanics, view)

        val card_layout = view.findViewById(R.id.card_layout) as LinearLayout

        card_layout?.setOnTouchListener(object :OnSwipeTouchListener(this.context!!){
            override fun onSwipeRight() {
               good(gameMechanics, view)
            }

            override fun onSwipeLeft() {
                skip(gameMechanics, view)
            }

            override fun onSwipeTop() {
                good(gameMechanics, view)
            }

            override fun onSwipeBottom() {
                skip(gameMechanics, view)
            }
        }
        )

        return view
    }
}