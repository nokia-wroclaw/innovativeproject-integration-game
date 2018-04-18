package pwr.damodarlepski.integrationgame

import android.os.Bundle
import android.support.v7.app.AppCompatActivity

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

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_game)

        val gameMechanics = GameMechanics()

        gameMechanics.addCard("Sport", "Robert Lewandowski", "")
        gameMechanics.addCard("Actor", "Cezary Pazura", "")
        gameMechanics.addCard("Musician", "Selena Gomez", "")
        gameMechanics.addCard("Dance", "Katarzyna Cichopek", "")
        gameMechanics.addCard("Writer", "Andrzej Sapkowski", "")

/*
        teamOneCounter = 0
        teamTwoCounter = 0
        ArrayCategory = ArrayCategoryData.toMutableList()
        ArrayPeople = ArrayPeopleData.toMutableList()
        indexOfRound = 0
        team_name = ""
*/

        val transaction = manager.beginTransaction()
        val fragment = RoundFragment()

        val passBundle = Bundle()
        passBundle.putSerializable("game_mechanics", gameMechanics)
        fragment.arguments = passBundle

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
       },3000)*/
    }
}