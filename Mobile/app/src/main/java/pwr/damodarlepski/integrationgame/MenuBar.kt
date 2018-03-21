package pwr.damodarlepski.integrationgame

import android.app.Activity
import android.content.Intent
import android.widget.Toast

class MenuBar {

    fun goToRulesSettings(activity: Activity) {
        Toast.makeText(activity, "Opening rules settings", Toast.LENGTH_SHORT).show()
        activity.startActivity(Intent(activity, RulesActivity::class.java))
    }
}