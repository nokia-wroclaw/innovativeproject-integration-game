package pwr.damodarlepski.integrationgame

import android.content.Context
import android.widget.BaseAdapter
import android.widget.Toast
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import kotlinx.android.synthetic.main.list_items.view.*


class CustomAdapter(private val context: Context, private val categories: List<String>) :BaseAdapter() {

    private val inflter = (LayoutInflater.from(context))

    override fun getCount(): Int {
        return categories.count()
    }

    override fun getItem(position: Int): Any? {
        return null
    }

    override fun getItemId(position: Int): Long {
        return 0
    }

    override fun getView(position: Int, view: View?, parent: ViewGroup): View {

        var value: String
        val inflatedView: View = inflter.inflate(R.layout.list_items, null)
        val simpleCheckedTextView = inflatedView.simpleCheckedTextView
        simpleCheckedTextView.text = categories[position] //??
        // perform on Click Event Listener on CheckedTextView
        simpleCheckedTextView.setOnClickListener {
            if (simpleCheckedTextView.isChecked) {
                // set cheek mark drawable and set checked property to false
                value = "un-Checked"
                simpleCheckedTextView.setCheckMarkDrawable(0)
                simpleCheckedTextView.isChecked = false
            } else {
                // set cheek mark drawable and set checked property to true
                value = "Checked"
                simpleCheckedTextView.setCheckMarkDrawable(R.drawable.ic_check_black_24dp)
                simpleCheckedTextView.isChecked = true
            }
            Toast.makeText(context, value, Toast.LENGTH_SHORT).show()
        }
        return inflatedView
    }
}