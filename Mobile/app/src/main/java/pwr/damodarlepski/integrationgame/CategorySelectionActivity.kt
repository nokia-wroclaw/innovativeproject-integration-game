package pwr.damodarlepski.integrationgame

// Not needed anymore

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_category_selection.*

class CategorySelectionActivity : AppCompatActivity() {

    private val categories = listOf("Actors", "Sportsmen")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_category_selection)

        // initiate a ListView
        val listView = listView
        // set the adapter to fill the data in ListView
        listView.adapter = CustomAdapter(applicationContext, categories)
    }
}
