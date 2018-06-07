package pwr.damodarlepski.integrationgame

import android.os.Bundle
import android.support.v4.app.Fragment
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button

class RoundFragment : Fragment() {
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        val getBundle = arguments
        val gameMechanics = getBundle?.getSerializable("GAME_MECHANICS") as GameMechanics

        Log.v("CARD_DECK", gameMechanics.cardDeck.size.toString())
        gameMechanics.fillCardSet()
        Log.v("CARD_SET", gameMechanics.cardSet.size.toString())

        val view = inflater.inflate(R.layout.fragment_round, container, false)
        val button = view.findViewById(R.id.button_round) as Button

        activity?.runOnUiThread {
            button.text = gameMechanics.getCurrentRoundDescription()
            (activity as GameActivity).setRoundName(gameMechanics)
            gameMechanics.currentRound++

            button.setOnClickListener {
                val transaction = fragmentManager?.beginTransaction()
                val fragment = TeamFragment()
                val passBundle = Bundle()
                passBundle.putSerializable("GAME_MECHANICS", gameMechanics)
                fragment.arguments = passBundle
                transaction?.replace(R.id.fragment_holder, fragment)
                transaction?.addToBackStack(null)
                transaction?.commit()
            }
        }
        return view
    }
}