package pwr.damodarlepski.integrationgame

import android.os.Bundle
import android.support.v4.app.Fragment
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button

class RoundFragment : Fragment() {

    val TAG = "FragmentRound"
    override fun onCreate(savedInstanceState: Bundle?) {
        Log.d(TAG,"onCreate")
        super.onCreate(savedInstanceState)
    }
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val getBundle = arguments
        val gameMechanics = getBundle?.getSerializable("game_mechanics") as GameMechanics

        val view = inflater.inflate(R.layout.fragment_round, container, false)
        val button = view.findViewById(R.id.button_round) as Button

        //button.text = ArrayRounds[indexOfRound]
        button.text = gameMechanics.getCurrentRoundDescription()
        gameMechanics.currentRound++
        gameMechanics.fillCardSet()

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
        return view
    }
}