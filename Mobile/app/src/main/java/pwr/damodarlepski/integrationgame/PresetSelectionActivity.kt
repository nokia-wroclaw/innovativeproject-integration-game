package pwr.damodarlepski.integrationgame

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AlertDialog
import android.support.v7.app.AppCompatActivity
import android.util.Log
import android.widget.Button
import kotlinx.android.synthetic.main.activity_preset_selection.*
import okhttp3.Response
import org.json.JSONArray


class PresetSelectionActivity : AppCompatActivity() {

    private val httpClient = HttpClient()
    private lateinit var gameMechanics: GameMechanics
    //var presetLookupMap = mutableMapOf<Int, String>()
    private val mutableListOfPresets = mutableListOf<Preset>()

    private fun getPresets() {

        val url = "https://integrationgame.herokuapp.com/api/preset"
        Log.wtf("INFO", url)

        httpClient.httpGet(url,
                fun(response: Response) {

                    Log.v("INFO", "Succeeded")
                    val responseString = response.body()?.string()
                    Log.v("INFO", responseString)

                    val jsonArray = JSONArray(responseString)

                    (0 until jsonArray.length())
                            .map { jsonArray.getJSONObject(it) }
                            .forEach {
                                mutableListOfPresets.add(Preset(it.getInt("id"), it.getString("name")))
                                setupButtons(mutableListOfPresets.size - 1)
                            }
                },
                fun() {
                    Log.v("INFO", "Failed")
                })
    }

    private fun setupButtons(indexOfPreset: Int) {

        val checkedCategoriesList = mutableListOf<Int>()

        val chosePresetButton = Button(this)
        chosePresetButton.text = mutableListOfPresets[indexOfPreset].name

        val categoryNamesArray = mutableListOfPresets[indexOfPreset].categoryNameArray
        val checkedCategories = BooleanArray(mutableListOfPresets[indexOfPreset].numberOfCategories)

        chosePresetButton.setOnClickListener {
            chosePresetButton.setOnClickListener {
                val categorySelectionDialogBuilder = AlertDialog.Builder(this@PresetSelectionActivity)
                categorySelectionDialogBuilder.setTitle("Chose categories")
                categorySelectionDialogBuilder.setMultiChoiceItems(categoryNamesArray, checkedCategories, { dialogInterface, position, isChecked ->
                    if (isChecked) {
                        checkedCategoriesList.add(position)
                    } else {
                        checkedCategoriesList.remove(Integer.valueOf(position))
                    }
                })

                categorySelectionDialogBuilder.setCancelable(false)
                categorySelectionDialogBuilder.setPositiveButton("OK", { dialogInterface, which ->
                    //                    var item = ""
//                    for (i in 0 until checkedCategoriesList.size) {
//                        item += categoryNamesArray[checkedCategoriesList[i]]
//                        if (i != checkedCategoriesList.size - 1) {
//                            item = "$item, "
//                        }
//                    }
//                    mItemSelected.setText(item)
                    val chosenCategoryList = mutableListOf<String>()
                    for (i in 0 until checkedCategoriesList.size) {
                        chosenCategoryList.add(categoryNamesArray[checkedCategoriesList[i]])
                    }
                    gameMechanics.categoryIdLookupMap = mutableListOfPresets[indexOfPreset].categoryIdLookupMap
                    gameMechanics.selectedCategoriesList = chosenCategoryList

                    startActivity(Intent(this, NewGameActivity::class.java).putExtra("GAME_MECHANICS", gameMechanics))
                })

                categorySelectionDialogBuilder.setNegativeButton("Dismiss", { dialogInterface, _ ->
                    dialogInterface.dismiss()
                    for (i in 0 until checkedCategories.size) {
                        checkedCategories[i] = false
                        checkedCategoriesList.clear()
                    }
                })

//                categorySelectionDialogBuilder.setNeutralButton("Clear all", { dialogInterface, which ->
//                    for (i in 0 until checkedCategories.size) {
//                        checkedCategories[i] = false
//                        checkedCategoriesList.clear()
//                    }
//                })

                val mDialog = categorySelectionDialogBuilder.create()
                this.runOnUiThread {
                    mDialog.show()
                }
            }
        }

        this.runOnUiThread {
            preset_list.addView(chosePresetButton)
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_preset_selection)

        gameMechanics = intent.getSerializableExtra("GAME_MECHANICS") as GameMechanics

        getPresets()
    }
}
