package pwr.damodarlepski.integrationgame

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_round_view.*

class Game : AppCompatActivity() {
    private val manager = supportFragmentManager
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.active_game)

        val transaction = manager.beginTransaction()
        val fragment = RoundActivity()
        transaction.replace(R.id.fragment_holder, fragment)
        transaction.addToBackStack(null)
        transaction.commit()

    }
}