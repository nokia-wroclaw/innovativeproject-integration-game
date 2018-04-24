package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView

class SummaryFragment : Fragment() {

    val TAG = "FragmentgameSummary"

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        val getBundle = arguments
        val gameMechanics = getBundle?.getSerializable("GAME_MECHANICS") as GameMechanics
        val view = inflater.inflate(R.layout.fragment_summary, container, false)
        val button = view.findViewById(R.id.button_end_game) as Button

        if (gameMechanics.currentRound >= gameMechanics.selectedRounds.size) {
            button.text = "The End"
        }


        val timeViewOne = view.findViewById(R.id.points_team_one_text) as TextView
        timeViewOne.text = gameMechanics.teamOneScore.toString()
        val timeViewTwo = view.findViewById(R.id.points_team_two_text) as TextView
        timeViewTwo.text = gameMechanics.teamTwoScore.toString()


        button.setOnClickListener {

            if (gameMechanics.currentRound < gameMechanics.selectedRounds.size) {
                val transaction = fragmentManager?.beginTransaction()
                val fragment = RoundFragment()

                val passBundle = Bundle()
                passBundle.putSerializable("GAME_MECHANICS", gameMechanics)
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