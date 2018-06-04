package pwr.damodarlepski.integrationgame

import android.util.Log
import okhttp3.Response
import org.json.JSONArray

class Preset(val id: Int, val name: String) {

    val httpClient = HttpClient()

    val categoryName = arrayListOf<String>()
    val categoryIndex = arrayListOf<Int>()
    var categoryIdLookupMap = mutableMapOf<String, Int>()

    var categoryNameArray = arrayOf<String>()

    var numberOfCategories = 0

    init {

        val url = "https://integrationgame.herokuapp.com/api/categories/preset/$id"
        Log.wtf("INFO", url)

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
                                categoryIndex.add(it.getInt("id"))
                                categoryName.add(it.getString("name"))
                                categoryIdLookupMap[it.getString("name")] = it.getInt("id")
                            }
                    numberOfCategories = categoryIndex.size
                },
                fun() {
                    Log.v("INFO", "Failed")
                })
        val arrayOfNames = arrayOfNulls<String>(categoryName.size)
        for (i in 0 until categoryName.size) {
            arrayOfNames[i] = categoryName[i]
        }
        categoryNameArray = arrayOfNames as Array<String>
    }
}