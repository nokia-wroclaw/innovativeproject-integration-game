package pwr.damodarlepski.integrationgame

import android.content.Context
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

    private var dummy: Int = 1
    private var index = 0
    private var counter = 0


    val TAG = "FragmentGame"
    override fun onAttach(context: Context?) {
        Log.d(TAG,"onAttach")
        super.onAttach(context)
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        Log.d(TAG,"onCreate")
        super.onCreate(savedInstanceState)
    }
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        Log.d(TAG,"onCreateView")

        val view = inflater.inflate(R.layout.fragment_game, container, false)

        fun timeOfRound() {


            val prefs = PreferenceManager.getDefaultSharedPreferences(context)
            val time = prefs.getString("time_for_guessing", null)

            counter = time.toInt()
//        time_progressBar.max = counter

            object : CountDownTimer((counter * 1000).toLong(), 1000) {
                override fun onTick(millisUntilFinished: Long) {
                    val timeView = view.findViewById(R.id.time_text) as TextView
                    timeView.text = (millisUntilFinished / 1000).toString()
                    val progress = view.findViewById(R.id.time_progressBar) as ProgressBar
                    progress.progress = ++dummy
                }

                override fun onFinish() {
                    val transaction = fragmentManager?.beginTransaction()
                    val fragment = TeamFragment()
                    transaction?.replace(R.id.fragment_holder, fragment)
                    transaction?.addToBackStack(null)
                    transaction?.commit()
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

        fun getNewPeople(): Int {
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
        }

        fun removePeople(index: Int) {
            ArrayCategory.removeAt(index)
            ArrayPeople.removeAt(index)
        }

        fun counterOfPoints() {
            if (team_name == "Team One") {
                teamOneCounter++
            } else {
                teamTwoCounter++
            }
        }

        fun setNewRoundOrSummary() {

            val prefs = PreferenceManager.getDefaultSharedPreferences(context)
            val rounds = prefs.getStringSet("rounds", null)

            val number = rounds.size
            println(number.toString()+" rounds size")
            println(indexOfRound.toString()+" rounds index rounds size")
            println(indexOfRound < number)
            if (indexOfRound < number) {
                println("if")
                println(number.toString()+" rounds size")
                println(indexOfRound.toString()+" rounds idex rounds size")
                val transaction = fragmentManager?.beginTransaction()
                val fragment = RoundFragment()
                transaction?.replace(R.id.fragment_holder, fragment)
                transaction?.addToBackStack(null)
                transaction?.commit()

            } else{
                println("else")
                val transaction = fragmentManager?.beginTransaction()
                val fragment = SummaryFragment()
                transaction?.replace(R.id.fragment_holder, fragment)
                transaction?.addToBackStack(null)
                transaction?.commit()
            }
        }

        fun newPeopleOrNewRound() {
            removePeople(index)
            if (ArrayPeople.size == 0)
                setNewRoundOrSummary()
            else
                index = getNewPeople()
        }


        index = getNewPeople()

        timeOfRound()

        val good = view.findViewById(R.id.button_good) as Button
        good.setOnClickListener {

            counterOfPoints()
            newPeopleOrNewRound()
        }

        val jump = view.findViewById(R.id.button_jump) as Button
        jump.setOnClickListener {

            newPeopleOrNewRound()
        }

        return view

    }
    override fun onActivityCreated(savedInstanceState: Bundle?) {
        Log.d(TAG,"onActivityCreated")
        super.onActivityCreated(savedInstanceState)
    }
    override fun onStart() {
        Log.d(TAG,"onStart")
        super.onStart()
    }
    override fun onResume() {
        Log.d(TAG,"onResume")
        super.onResume()
    }
    override fun onPause() {
        Log.d(TAG,"onPause")
        super.onPause()
    }
    override fun onStop() {
        Log.d(TAG,"onStop")
        super.onStop()
    }
    override fun onDestroyView() {
        Log.d(TAG,"onDestroyView")
        super.onDestroyView()
    }
    override fun onDestroy() {
        Log.d(TAG,"onDestroy")
        super.onDestroy()
    }
    override fun onDetach() {
        Log.d(TAG,"onDetach")
        super.onDetach()
    }
}