package pwr.damodarlepski.integrationgame

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ListView
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
