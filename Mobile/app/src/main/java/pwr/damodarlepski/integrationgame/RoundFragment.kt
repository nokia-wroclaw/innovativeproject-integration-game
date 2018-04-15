package pwr.damodarlepski.integrationgame

import android.content.Context
import android.os.Bundle
import android.support.v4.app.Fragment
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button

class RoundFragment : Fragment() {

    val TAG = "FragmentRound"
    override fun onAttach(context: Context?) {
        Log.d(TAG, "onAttach")
        super.onAttach(context)
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        Log.d(TAG,"onCreate")
        super.onCreate(savedInstanceState)
    }
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        Log.d(TAG,"onCreateView")

        val view = inflater.inflate(R.layout.fragment_round, container, false)
        val button = view.findViewById(R.id.button_round) as Button
        button.text = ArrayRounds[indexOfRound]

        indexOfRound++
        ArrayCategory = ArrayCategoryData.toMutableList()
        ArrayPeople = ArrayPeopleData.toMutableList()
        button.setOnClickListener {
            Thread.sleep(1000) //Po co to tu?

            val transaction = fragmentManager?.beginTransaction()
            val fragment = TeamFragment()
            transaction?.replace(R.id.fragment_holder, fragment)
            transaction?.addToBackStack(null)
            transaction?.commit()
        }
        return view
    }
    override fun onActivityCreated(savedInstanceState: Bundle?) {
        Log.d(TAG, "onActivityCreated")
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