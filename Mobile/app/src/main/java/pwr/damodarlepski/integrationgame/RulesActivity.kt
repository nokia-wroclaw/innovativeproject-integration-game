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
        private fun setListPreferenceDataRounds(lp: MultiSelectListPreference) {
            val values = mutableSetOf("1", "2", "3", "4")
            lp.values = values
        }

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            addPreferencesFromResource(R.xml.rules)
            val rounds = findPreference("rounds") as MultiSelectListPreference
            setListPreferenceDataRounds(rounds)
        }
    }
}
