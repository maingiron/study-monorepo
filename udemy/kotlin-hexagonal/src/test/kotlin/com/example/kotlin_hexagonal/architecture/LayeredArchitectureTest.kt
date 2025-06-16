package com.example.kotlin_hexagonal.architecture

import com.tngtech.archunit.junit.AnalyzeClasses
import com.tngtech.archunit.junit.ArchTest
import com.tngtech.archunit.library.Architectures.layeredArchitecture

@AnalyzeClasses(packages = ["com.example.kotlin_hexagonal"])
class LayeredArchitectureTest {

    @ArchTest
    val `layered_architecture_test` = layeredArchitecture()
        .consideringAllDependencies()
        .layer("AdaptersIn").definedBy("com.example.kotlin_hexagonal.adapters.in..")
        .layer("AdaptersOut").definedBy("com.example.kotlin_hexagonal.adapters.out..")
        .layer("UseCase").definedBy("com.example.kotlin_hexagonal.application.core.usecase..")
        .layer("PortsIn").definedBy("com.example.kotlin_hexagonal.application.ports.in..")
        .layer("PortsOut").definedBy("com.example.kotlin_hexagonal.application.ports.out..")
        .layer("Config").definedBy("com.example.kotlin_hexagonal.config..")
        .whereLayer("AdaptersIn").mayOnlyBeAccessedByLayers("Config")
        .whereLayer("AdaptersOut").mayOnlyBeAccessedByLayers("Config")
        .whereLayer("UseCase").mayOnlyBeAccessedByLayers("Config")
        .whereLayer("PortsIn").mayOnlyBeAccessedByLayers("UseCase", "AdaptersIn", "Config")
        .whereLayer("PortsOut").mayOnlyBeAccessedByLayers("UseCase", "AdaptersOut", "Config")
        .whereLayer("Config").mayNotBeAccessedByAnyLayer()
}