package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.Menu
import android.view.MenuItem
import kotlinx.android.synthetic.main.activity_main_menu.*
import kotlin.concurrent.thread


class MainMenuActivity : AppCompatActivity() {

    //    val httpClient = HttpClient()
    val gameMechanics = GameMechanics()

//    fun getCategories() {
//
//        val url = "https://integrationgame.herokuapp.com/api/categories/preset/1"
//        Log.wtf("INFO", url)
//
//        httpClient.synchronousHttpGet(url,
//                fun(response: Response) {
//
//                    Log.v("INFO", "Succeeded")
//                    val responseString = response.body()?.string()
//                    Log.v("INFO", responseString)
//
//                    val jsonArray = JSONArray(responseString)
//                    val size: Int = jsonArray.length()
//
//                    (0 until size)
//                            .map { jsonArray.getJSONObject(it) }
//                            .forEach {
//                                gameMechanics.categoryLookupMap[it.getInt("id")] = it.getString("name")
//                            }
//                },
//                fun() {
//                    Log.v("INFO", "Failed")
//                })
//    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {

        val inflater = menuInflater
        inflater.inflate(R.menu.menu_bar, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {

        val menu = MenuBar()
        when (item.itemId)
        {
            R.id.menu_rules -> menu.goToRulesSettings(this)
        }
        return super.onOptionsItemSelected(item)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main_menu)
        thread {
            //getCategories()

            button_new_game.setOnClickListener {
                startActivity(Intent(this, PresetSelectionActivity::class.java).putExtra("GAME_MECHANICS", gameMechanics))
            }
            button_go_to_rules.setOnClickListener {
                startActivity(Intent(this, DescriptionRulesActivity::class.java))
            }
        }
    }
}
