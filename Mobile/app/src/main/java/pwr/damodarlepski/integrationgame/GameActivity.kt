package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.preference.PreferenceManager
import android.support.v7.app.AppCompatActivity
import android.util.Log
import android.widget.Toast
import okhttp3.Response
import org.json.JSONArray
import kotlin.concurrent.thread

/*
var teamOneCounter = 0
var teamTwoCounter = 0

val ArrayCategoryData: MutableList<String> = mutableListOf("Sport", "Actor", "Musiacian", "Dance", "Writers")
val ArrayPeopleData: MutableList<String> = mutableListOf("Robert Lewandowski", "Cezary Pazura", "Selena Gomez", "Katarzyna Cichopek", "Andrzej Sapkowski")

var ArrayCategory = ArrayCategoryData.toMutableList()
var ArrayPeople = ArrayPeopleData.toMutableList()

var indexOfRound = 0
val ArrayRounds = arrayOf("Description\nIn round 1, the Cluegiver draws a name card and begins giving clues to his teammates (Guessers). The Cluegiver can sing, hum, point, charade, give full descriptions of the person, etc."
        , "One word \nIn round 2, the Cluegiver may give only one word for each clue, which may be repeated as often as desired. Once the word is said, only non-verbal clues (sound effects, charades) may be given."
        , "Showing without speaking \nIn round 3, the Cluegiver may not use any words at all. Only sounds and charades may be used for each clue. "
        , "Pose \nIn round 4, the Guesser starts with their eyes closed while the Cluegiver freezes in a pose depicting their clue. Once frozen, the Guesser opens their eyes and must give one guess.")

var team_name = ""
*/

class GameActivity : AppCompatActivity() {
    private val manager = supportFragmentManager
    private lateinit var gameMechanics: GameMechanics
    private val httpClient = HttpClient()

    fun drawRandomCards(number: Int) {

        val prefs = PreferenceManager.getDefaultSharedPreferences(this)
        val categories = prefs.getStringSet("categories", null)

        for (element in categories) {
            getCardsFromCategory(element.toString().toInt(), gameMechanics.categoryLookupMap[element.toString().toInt()], number / categories.size)
        }
    }

    fun getCardsFromCategory(id: Int, category: String?, size: Int) {

        val url = "https://integrationgame.herokuapp.com/api/categories/random/size/$size/id/$id"
        Log.wtf("INFO", url)

        httpClient.synchronousHttpGet(url,
                fun(response: Response) {

                    Log.v("INFO", "Succeeded")
                    val responseString = response.body()?.string()
                    Log.v("INFO", responseString)

                    val jsonArray = JSONArray(responseString)

                    (0 until jsonArray.length())
                            .map { jsonArray.getJSONObject(it) }
                            .forEach {
                                gameMechanics.addCard(category, it.getString("name") + " " + it.getString("surname"), it.getString("description"))
                            }
                },
                fun() {
                    Log.v("INFO", "Failed")
                })
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_game)

        thread {
            gameMechanics = intent.getSerializableExtra("GAME_MECHANICS") as GameMechanics

            drawRandomCards(40)

            val transaction = manager.beginTransaction()
            val fragment = RoundFragment()

            val passBundle = Bundle()
            passBundle.putSerializable("GAME_MECHANICS", gameMechanics)
            fragment.arguments = passBundle

            transaction.replace(R.id.fragment_holder, fragment)
            transaction.addToBackStack(null)
            transaction.commit()
        }
    }

    var twice: Boolean = false
    override fun onBackPressed() {
       //super.onBackPressed()
       if(twice==true){
           /*
           val intent: Intent = Intent (Intent.ACTION_MAIN)
           intent.addCategory(Intent.CATEGORY_HOME)
           intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)
           startActivity(intent)
           finish()
           System.exit(0)*/
           startActivity(Intent(this, MainMenuActivity::class.java))
           finish()
           System.exit(0)
       }
       twice=true
        Toast.makeText(this, "Please press BACK again to exit", Toast.LENGTH_SHORT).show()
        Handler().postDelayed({
            twice = false
        }, 3000)
    }
}