package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.os.Bundle
import android.support.v4.app.Fragment
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView

class SummaryFragment : Fragment() {

    val TAG = "FragmentgameSummary"
    override fun onCreate(savedInstanceState: Bundle?) {
        Log.d(TAG,"onCreate")
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        val getBundle = arguments
        val gameMechanics = getBundle?.getSerializable("game_mechanics") as GameMechanics

        val view = inflater.inflate(R.layout.fragment_summary, container, false)
        val timeViewOne = view.findViewById(R.id.points_team_one_text) as TextView
        timeViewOne.text = gameMechanics.teamOneScore.toString()
        val timeViewTwo = view.findViewById(R.id.points_team_two_text) as TextView
        timeViewTwo.text = gameMechanics.teamTwoScore.toString()

        val button = view.findViewById(R.id.button_end_game) as Button
        button.setOnClickListener {

            if (gameMechanics.currentRound < gameMechanics.selectedRounds.size - 1) {
                val transaction = fragmentManager?.beginTransaction()
                val fragment = RoundFragment()

                val passBundle = Bundle()
                passBundle.putSerializable("game_mechanics", gameMechanics)
                fragment.arguments = passBundle

                transaction?.replace(R.id.fragment_holder, fragment)
                transaction?.addToBackStack(null)
                transaction?.commit()
            } else {

                val act = Intent(view.context, MainMenuActivity::class.java)
                activity!!.startActivity(act)
            }
        }
        return view
    }
}