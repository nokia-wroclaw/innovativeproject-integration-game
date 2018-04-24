package pwr.damodarlepski.integrationgame

import android.content.res.Configuration
import android.os.Bundle
import android.support.v4.app.Fragment
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button

class RoundFragment : Fragment() {

    val TAG = "FragmentRound"

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

            val getBundle = arguments
            val gameMechanics = getBundle?.getSerializable("game_mechanics") as GameMechanics

            Log.v("CARD_DECK", gameMechanics.cardDeck.size.toString())
            gameMechanics.fillCardSet()
            Log.v("CARD_SET", gameMechanics.cardSet.size.toString())

            var view = inflater.inflate(R.layout.fragment_round, container, false)
            val button = view.findViewById(R.id.button_round) as Button

            activity?.runOnUiThread {

                //button.text = ArrayRounds[indexOfRound]
                button.text = gameMechanics.getCurrentRoundDescription()
                gameMechanics.currentRound++

                //indexOfRound++
                //ArrayCategory = ArrayCategoryData.toMutableList()
                //ArrayPeople = ArrayPeopleData.toMutableList()

                button.setOnClickListener {
                    val transaction = fragmentManager?.beginTransaction()
                    val fragment = TeamFragment()

                    val passBundle = Bundle()
                    passBundle.putSerializable("game_mechanics", gameMechanics)
                    fragment.arguments = passBundle

                    transaction?.replace(R.id.fragment_holder, fragment)
                    transaction?.addToBackStack(null)
                    transaction?.commit()
                }
            }

            return view

    }
}