package lambdas

import java.util.Locale.getDefault

fun main(args: Array<String>) {
    val alunos = arrayListOf("Pedro", "Tiago", "Jonas")
    alunos.map { it.uppercase(getDefault()) }.apply { print(this) }
}