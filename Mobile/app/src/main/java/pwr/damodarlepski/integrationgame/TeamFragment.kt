package pwr.damodarlepski.integrationgame

import android.content.Context
import android.os.Bundle
import android.os.CountDownTimer
import android.support.v4.app.Fragment
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button

class TeamFragment : Fragment() {

    val TAG = "FragmentTeam"

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

        val view = inflater.inflate(R.layout.fragment_team, container, false)
        val button = view.findViewById(R.id.button_team_start) as Button

        if (button.text == "Team One") {
            team_name = "Team Two"
        } else {
            team_name = "Team One"
        }


        button.text = team_name
        button.setOnClickListener {
            
            activity?.runOnUiThread {

                button.text = 3.toString()
                object : CountDownTimer(3900, 1000) {

                    override fun onTick(millisUntilFinished: Long) {

                        button.text = (millisUntilFinished / 1000).toString()

                    }

                    override fun onFinish() {
                        val transaction = fragmentManager?.beginTransaction()
                        val fragment = GameFragment()
                        transaction?.replace(R.id.fragment_holder, fragment)
                        transaction?.addToBackStack(null)
                        transaction?.commit()
                    }
                }.start()
            }
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