package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.nfc.Tag
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import android.widget.Toast

var teamOneCounter = 0
var teamTwoCounter = 0

val ArrayCategoryData: MutableList<String> = mutableListOf("Sport", "Actor", "Musiacian", "Dance", "Writers")
val ArrayPeopleData: MutableList<String> = mutableListOf("Robert Lewandowski", "Cezary Pazura", "Selena Gomez", "Katarzyna Cichopek", "Andrzej Sapkowski")

var ArrayCategory = ArrayCategoryData.toMutableList()
var ArrayPeople = ArrayPeopleData.toMutableList()

var indexOfRound = 0
val ArrayRounds = arrayOf("Description \n In round 1, the Cluegiver draws a name card and begins giving clues to his teammates (Guessers). The Cluegiver can sing, hum, point, charade, give full descriptions of the person, etc."
        , "One word \n In round 2, the Cluegiver may give only one word for each clue, which may be repeated as often as desired. Once the word is said, only non-verbal clues (sound effects, charades) may be given."
        , "Showing without speaking \n In round 3, the Cluegiver may not use any words at all. Only sounds and charades may be used for each clue. "
        , "Pose \n In round 4, the Guesser starts with their eyes closed while the Cluegiver freezes in a pose depicting their clue. Once frozen, the Guesser opens their eyes and must give one guess.")

var team_name = ""

class GameActivity : AppCompatActivity() {
    private val manager = supportFragmentManager

    val gameMechanics = GameMechanics()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_game)

        gameMechanics.addCard("Sport", "Robert Lewandowski", "")
        gameMechanics.addCard("Actor", "Cezary Pazura", "")
        gameMechanics.addCard("Musician", "Selena Gomez", "")
        gameMechanics.addCard("Dance", "Katarzyna Cichopek", "")
        gameMechanics.addCard("Writer", "Andrzej Sapkowski", "")

        teamOneCounter = 0
        teamTwoCounter = 0
        ArrayCategory = ArrayCategoryData.toMutableList()
        ArrayPeople = ArrayPeopleData.toMutableList()
        indexOfRound = 0
        team_name = ""

        val transaction = manager.beginTransaction()
        val fragment = RoundFragment()
        transaction.replace(R.id.fragment_holder, fragment)
        transaction.addToBackStack(null)
        transaction.commit()

    }

    //TO DO alert (when click you twice to back button you exit game
   // val TAG=""
    //val twice:Boolean = false
    override fun onBackPressed() {
       //super.onBackPressed()
       /*Log.d(TAG,"click")
       if(twice==true){
           Intent.intent = new Intent(Intent.ACTION_MAIN)
           intent.addCategory(Intent.CATEGORY_HOME)
           intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)
           startActivity(intent)
           finish()
           System.exit(0)
       }
       twice=true
       Log.d(Tag,"twice"+twice)
       Toast.makeText(MainMenuActivity.this,"Please press BACK again to exit", Toast.LENGTH_SHORT).show()
       new Handler().postDelayed(new Runnable(){
           @Override
           fun run(){
               twice=false;

           }
       },3000)
*/
    }
}