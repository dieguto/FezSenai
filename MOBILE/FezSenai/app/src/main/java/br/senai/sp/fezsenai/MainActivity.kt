package br.senai.sp.fezsenai

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val cadastroStep2 = Intent(this, CadastroSeuCurso::class.java)
        startActivity(cadastroStep2)

    }
}
