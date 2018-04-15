package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_game_summary_view.*
import android.content.Context
import android.support.v4.app.Fragment
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup

class GameSummaryActivity : Fragment() {

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
        return inflater!!.inflate(R.layout.activity_game_summary_view,container,false)
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
    /* override fun onCreate(savedInstanceState: Bundle?) {
         super.onCreate(savedInstanceState)
         setContentView(R.layout.activity_game_summary_view)

         points_team_one_text.text = teamOneCounter.toString()
         points_team_two_text.text = teamTwoCounter.toString()


         button_end_game.setOnClickListener {
             startActivity(Intent(this@GameSummaryActivity, MainMenuActivity::class.java))
         }

     }*/
}