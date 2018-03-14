package pwr.damodarlepski.integrationgame

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main_menu.*

class MainMenuActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main_menu)

        button_new_game.setOnClickListener {
            val intent = android.content.Intent(this, CategorySelectionActivity::class.java)
            startActivity(intent)
        }
    }
}
