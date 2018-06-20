package pwr.damodarlepski.integrationgame

import android.os.Bundle
import android.os.CountDownTimer
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button

class TeamFragment : Fragment() {
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        val getBundle = arguments
        val gameMechanics = getBundle?.getSerializable("GAME_MECHANICS") as GameMechanics
        val view = inflater.inflate(R.layout.fragment_team, container, false)
        val button = view.findViewById(R.id.button_team_start) as Button

        activity?.runOnUiThread {
            if (gameMechanics.currentTeam == 1) {
                button.text = "Team\nOne"
            } else {
                button.text = "Team\nTwo"
            }

            button.isClickable = true
            button.setOnClickListener {
                button.isClickable = false
                object : CountDownTimer(3900, 1000) {
                    override fun onTick(millisUntilFinished: Long) {
                        button.text = (millisUntilFinished / 1000).toString()
                    }

                    override fun onFinish() {
                        val transaction = fragmentManager?.beginTransaction()
                        val fragment = GameFragment()
                        val passBundle = Bundle()
                        passBundle.putSerializable("GAME_MECHANICS", gameMechanics)
                        fragment.arguments = passBundle
                        transaction?.replace(R.id.fragment_holder, fragment)
                        transaction?.addToBackStack(null)
                        transaction?.commit()
                    }
                }.start()
            }
        }
        return view
    }
}