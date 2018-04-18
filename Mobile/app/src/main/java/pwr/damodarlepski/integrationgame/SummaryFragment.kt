package pwr.damodarlepski.integrationgame

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.support.v4.app.Fragment
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import pwr.damodarlepski.integrationgame.R.id.*

class SummaryFragment : Fragment() {

    val TAG = "FragmentgameSummary"

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

        val view = inflater.inflate(R.layout.fragment_summary, container, false)
        val timeViewOne = view.findViewById(R.id.points_team_one_text) as TextView
        timeViewOne.text = teamOneCounter.toString()
        val timeViewTwo = view.findViewById(R.id.points_team_two_text) as TextView
        timeViewTwo.text = teamTwoCounter.toString()

        val button = view.findViewById(R.id.button_end_game) as Button
        button.setOnClickListener {
            val act = Intent(view.getContext(), MainMenuActivity::class.java)
            activity!!.startActivity(act)
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