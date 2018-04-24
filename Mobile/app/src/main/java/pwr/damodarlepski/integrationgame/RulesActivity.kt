package pwr.damodarlepski.integrationgame

import android.os.Bundle
import android.preference.MultiSelectListPreference
import android.preference.PreferenceActivity
import android.preference.PreferenceFragment
import android.util.Log
import okhttp3.Response
import org.json.JSONArray
import kotlin.concurrent.thread


class RulesActivity : PreferenceActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        fragmentManager.beginTransaction().replace(android.R.id.content, RulesFragment()).commit()
    }

    class RulesFragment : PreferenceFragment() {
        private val httpClient = HttpClient()


        fun getCategories(lp: MultiSelectListPreference) {

            val url = "https://integrationgame.herokuapp.com/api/categories/"
            Log.wtf("INFO", url)

            val entries = mutableListOf<CharSequence>()
            val entryValues = mutableListOf<CharSequence>()
            val values = mutableSetOf<String>()

            httpClient.synchronousHttpGet(url,
                    fun(response: Response) {

                        Log.v("INFO", "Succeeded")
                        val responseString = response.body()?.string()
                        Log.v("INFO", responseString)

                        val jsonArray = JSONArray(responseString)
                        val size: Int = jsonArray.length()

                        (0 until size)
                                .map { jsonArray.getJSONObject(it) }
                                .forEach {
                                    entries.add(it.getString("name"))
                                    entryValues.add(it.getString("id"))
                                    values.add(it.getString("id"))
                                    //val card = Card(it.getString("name")+" "+it.getString("surname"), it.getString("description"))
                                }

                        val entriesArray: Array<CharSequence> = entries.toTypedArray()
                        val entryValuesArray: Array<CharSequence> = entryValues.toTypedArray()
                        lp.entries = entriesArray
                        lp.entryValues = entryValuesArray
                        lp.values = values
                    },
                    fun() {
                        Log.v("INFO", "Failed")
                    })
        }

        private fun setListPreferenceDataCategories(lp: MultiSelectListPreference) {

            val entries = arrayOf<CharSequence>("Actors", "Musicians")
            val entryValues = arrayOf<CharSequence>("Actors", "Musicians")
            val values = mutableSetOf("Actors", "Musicians")
            lp.entries = entries
            lp.entryValues = entryValues
            lp.values = values
        }

        private fun setListPreferenceDataRounds(lp: MultiSelectListPreference) {

            val values = mutableSetOf("1", "2", "3", "4")
            lp.values = values
        }

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            addPreferencesFromResource(R.xml.rules)

            val categories = findPreference("categories") as MultiSelectListPreference
            //setListPreferenceDataCategories(categories)

            thread {
                getCategories(categories)
            }

            val rounds = findPreference("rounds") as MultiSelectListPreference
            setListPreferenceDataRounds(rounds)
        }
    }
}
