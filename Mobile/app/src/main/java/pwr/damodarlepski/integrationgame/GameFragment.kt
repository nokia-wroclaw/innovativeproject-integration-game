package pwr.damodarlepski.integrationgame

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

    private var timeStep: Int = 1
    private var index = 0
    private var timeCounter = 0
    private var allowedSkips = 2

    val TAG = "FragmentGame"
    override fun onCreate(savedInstanceState: Bundle?) {
        Log.d(TAG,"onCreate")
        super.onCreate(savedInstanceState)
    }

    private fun nextTeam(gameMechanics: GameMechanics) {

        if (gameMechanics.currentTeam == 1) {
            ++gameMechanics.currentTeam
        } else {
            --gameMechanics.currentTeam
        }

        val transaction = fragmentManager?.beginTransaction()
        val fragment = TeamFragment()

        val passBundle = Bundle()
        passBundle.putSerializable("game_mechanics", gameMechanics)
        fragment.arguments = passBundle

        transaction?.replace(R.id.fragment_holder, fragment)
        transaction?.addToBackStack(null)
        transaction?.commit()
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val getBundle = arguments
        val gameMechanics = getBundle?.getSerializable("game_mechanics") as GameMechanics

        val view = inflater.inflate(R.layout.fragment_game, container, false)

        fun timeOfRound() {

            val prefs = PreferenceManager.getDefaultSharedPreferences(context)
            val time = prefs.getString("time_for_guessing", null)
            timeCounter = time.toInt()
            val progress = view.findViewById(R.id.time_progressBar) as ProgressBar
            progress.max = timeCounter

            object : CountDownTimer((timeCounter * 1000).toLong(), 1000) {
                override fun onTick(millisUntilFinished: Long) {
                    val timeView = view.findViewById(R.id.time_text) as TextView
                    timeView.text = (millisUntilFinished / 1000).toString()
                    progress.progress = ++timeStep
                }

                override fun onFinish() {
                    nextTeam(gameMechanics)
                }
            }.start()
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

        /*fun getNewPeople(): Int {
            val index: Int
            if (ArrayPeople.size > 0) {
                index = rand((ArrayPeople.size) - 1)
                val category = view.findViewById(R.id.category_text) as TextView
                category.text = ArrayCategory[index]
                val people = view.findViewById(R.id.category_text) as TextView
                people.text = ArrayPeople[index]
            } else
                index = -1

            return index
        }*/

        fun getNewCard() {
            if (gameMechanics.cardSet.size > 0) {
                val index = rand(gameMechanics.cardSet.size - 1)
                val category = view.findViewById(R.id.category_text) as TextView
                category.text = gameMechanics.cardSet[index].category
                val people = view.findViewById(R.id.people_text) as TextView
                people.text = gameMechanics.cardSet[index].name
                gameMechanics.cardSet.removeAt(index)
            }
        }

        /*fun removeCard(index: Int) {

            ArrayCategory.removeAt(index)
            ArrayPeople.removeAt(index)
        }*/

        fun pointsCounter() {
            if (gameMechanics.currentTeam == 1) {
                gameMechanics.teamOneScore++
            } else {
                gameMechanics.teamTwoScore++
            }
        }

        /*fun newRoundOrSummary() {

            val prefs = PreferenceManager.getDefaultSharedPreferences(context)
            val rounds = prefs.getStringSet("rounds", null)

            val number = rounds.size
            println(number.toString()+" rounds size")
            println(indexOfRound.toString()+" rounds index rounds size")
            println(indexOfRound < number)
            if (indexOfRound < number) {
                nextTeam(gameMechanics)
            } else{

                val transaction = fragmentManager?.beginTransaction()
                val fragment = SummaryFragment()

                val passBundle = Bundle()
                passBundle.putSerializable("game_mechanics", gameMechanics)
                fragment.arguments = passBundle

                transaction?.replace(R.id.fragment_holder, fragment)
                transaction?.addToBackStack(null)
                transaction?.commit()
            }
        }*/

        fun nextPlayer() {
            if (gameMechanics.cardSet.size > 0) {
                nextTeam(gameMechanics)
            } else {
                val transaction = fragmentManager?.beginTransaction()
                val fragment = SummaryFragment()

                val passBundle = Bundle()
                passBundle.putSerializable("game_mechanics", gameMechanics)
                fragment.arguments = passBundle

                transaction?.replace(R.id.fragment_holder, fragment)
                transaction?.addToBackStack(null)
                transaction?.commit()
            }
        }

        /*fun nextCardOrNewRound() {

            //removeCard(index)
            if (ArrayPeople.size == 0)
                newRoundOrSummary()
            else
                index = getNewPeople()
        }*/

        //index = getNewPeople()

        getNewCard()
        timeOfRound()

        val good = view.findViewById(R.id.button_good) as Button
        good.setOnClickListener {

            pointsCounter()
            nextPlayer()
        }

        val jump = view.findViewById(R.id.button_jump) as Button
        jump.setOnClickListener {

            if (allowedSkips > 0) {
                allowedSkips--
                //nextCardOrNewRound()
                getNewCard()
            }
        }
        return view
    }
}