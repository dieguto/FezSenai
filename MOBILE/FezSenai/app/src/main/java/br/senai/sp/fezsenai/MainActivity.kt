package br.senai.sp.fezsenai

import android.content.ComponentCallbacks2
import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        btPerfilPublico.setOnClickListener {
            val intent = Intent(this, PerfilPublico::class.java)
            startActivity(intent)
        }
    }


}
