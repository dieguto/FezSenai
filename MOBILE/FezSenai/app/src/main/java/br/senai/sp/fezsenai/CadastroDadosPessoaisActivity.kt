package br.senai.sp.fezsenai

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_cadastro_dados_pessoais.*

class CadastroDadosPessoaisActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_dados_pessoais)

        prosseguir.setOnClickListener {

            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent);

        }
    }
}
