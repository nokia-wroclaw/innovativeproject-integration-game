package pwr.damodarlepski.integrationgame

import android.app.AlertDialog
import android.app.Dialog
import android.app.DialogFragment
import android.os.Bundle
import android.widget.NumberPicker

class NumberPickerDialog : DialogFragment() {

    private var valueChangeListener: NumberPicker.OnValueChangeListener? = null

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {

        val numberPicker = NumberPicker(activity)

        numberPicker.minValue = 2
        numberPicker.maxValue = 10

        val builder = AlertDialog.Builder(activity)
        builder.setTitle("Number of players")
        builder.setMessage("Set desired number of players :")

        builder.setPositiveButton("OK", { _, _ ->
            valueChangeListener!!.onValueChange(numberPicker,
                    numberPicker.value, numberPicker.value)
        })

        builder.setView(numberPicker)
        return builder.create()
    }

    fun getValueChangeListener(): NumberPicker.OnValueChangeListener? {
        return valueChangeListener
    }

    fun setValueChangeListener(valueChangeListener: NumberPicker.OnValueChangeListener) {
        this.valueChangeListener = valueChangeListener
    }
}