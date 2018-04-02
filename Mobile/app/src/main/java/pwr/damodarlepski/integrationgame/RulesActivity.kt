package pwr.damodarlepski.integrationgame

import android.os.Bundle
import android.preference.MultiSelectListPreference
import android.preference.PreferenceActivity
import android.preference.PreferenceFragment


class RulesActivity : PreferenceActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        fragmentManager.beginTransaction().replace(android.R.id.content, RulesFragment()).commit()
    }

    class RulesFragment : PreferenceFragment() {

        private fun setListPreferenceData(lp: MultiSelectListPreference) {
            val entries = arrayOf<CharSequence>("Actors", "Musicians")
            val entryValues = arrayOf<CharSequence>("Actors", "Musicians")
            lp.entries = entries
            lp.entryValues = entryValues
        }

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            addPreferencesFromResource(R.xml.rules)

            val categories = findPreference("categories") as MultiSelectListPreference
            setListPreferenceData(categories)
        }
    }
}
