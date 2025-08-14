package fundamentos.controles

fun main(args: Array<String>) {
    val nota: Double = 8.99

    // Usando operador range
    if (nota >= 9 && nota <= 10) {
        println("Fantástico")
    } else if (nota >= 7 && nota < 9) {
        println("Parabéns")
    } else if (nota >= 4 && nota < 7) {
        println("Tem como recuperar")
    } else if (nota >= 0 && nota < 4) {
        println("Te vejo no próximo semestre")
    } else {
        println("Nota inválida")
    }

    println(5 in 7..4)
    println(5 in 4..7)
}