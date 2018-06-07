package pwr.damodarlepski.integrationgame

import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.view.animation.Animation
import android.view.animation.ScaleAnimation
import android.widget.ImageView


class SkipActivity: Fragment() {
    fun scaleView(igreen:ImageView,ired:ImageView) {
        val anim = ScaleAnimation(
                0f, 1f, // Start and end values for the X axis scaling
               1f,1f, // Start and end values for the Y axis scaling
                Animation.RELATIVE_TO_SELF, 0f, // Pivot point of X scaling
                Animation.RELATIVE_TO_SELF, 1f) // Pivot point of Y scaling
        anim.fillAfter = true // Needed to keep the result of the animation
        anim.duration = 2000
        anim.repeatCount = Animation.INFINITE
        igreen.startAnimation(anim)
        val animRed = ScaleAnimation(
                0f, 1f, // Start and end values for the X axis scaling
                1f,1f, // Start and end values for the Y axis scaling
                Animation.RELATIVE_TO_SELF, 1f, // Pivot point of X scaling
                Animation.RELATIVE_TO_SELF, 1f) // Pivot point of Y scaling
        animRed.fillAfter = true // Needed to keep the result of the animation
        animRed.duration = 2000
        animRed.repeatCount = Animation.INFINITE
        ired.startAnimation(animRed)
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val getBundle = arguments
        val gameMechanics = getBundle?.getSerializable("GAME_MECHANICS") as GameMechanics

        val view = inflater.inflate(R.layout.activity_skip, container, false)
        val button = view.findViewById(R.id.start_button_in_skip) as Button

        val greenArrow = view.findViewById(R.id.green_arrow) as ImageView
        val redArrow = view.findViewById(R.id.red_arrow) as ImageView

        scaleView(greenArrow,redArrow)

        activity?.runOnUiThread {

            button.setOnClickListener {

                        val transaction = fragmentManager?.beginTransaction()
                        val fragment = RoundFragment()

                        val passBundle = Bundle()
                        passBundle.putSerializable("GAME_MECHANICS", gameMechanics)
                        fragment.arguments = passBundle

                        transaction?.replace(R.id.fragment_holder, fragment)
                        transaction?.addToBackStack(null)
                        transaction?.commit()
            }
        }
        return view
    }
}