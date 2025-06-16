package com.example.kotlin_hexagonal.architecture

import com.tngtech.archunit.junit.AnalyzeClasses
import com.tngtech.archunit.junit.ArchTest
import com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes

@AnalyzeClasses(
    packages = ["com.example.kotlin_hexagonal"],
    importOptions = [com.tngtech.archunit.core.importer.ImportOption.DoNotIncludeTests::class])
class NamingConventionTest {
    @ArchTest
    val `consumer_reside_only_consumer_package` = classes()
        .that()
        .haveNameMatching(".*Consumer")
        .should()
        .resideInAPackage("com.example.kotlin_hexagonal.adapters.in.consumer..")
        .`as`("[CUSTOM MSG] Consumer classes should reside only in the consumer package")

    @ArchTest
    val `response_resise_only_response_package` = classes()
        .that()
        .haveNameMatching(".*Response")
        .should()
        .resideInAnyPackage(
            "com.example.kotlin_hexagonal.adapters.in.controller.response..",
            "com.example.kotlin_hexagonal.adapters.out.client.response.."
        )
        .`as`("[CUSTOM MSG] Response classes should reside only in the response packages")

    @ArchTest
    val `should_be_suffixed_consumer` = classes()
        .that()
        .resideInAPackage("com.example.kotlin_hexagonal.adapters.in.consumer")
        .should()
        .haveSimpleNameEndingWith("Consumer")
        .`as`("[CUSTOM MSG] Classes in the consumer package should be suffixed with 'Consumer'")

    @ArchTest
    val `should_be_suffixed_message` = classes()
        .that()
        .resideInAPackage("com.example.kotlin_hexagonal.adapters.in.consumer.message")
        .should()
        .haveSimpleNameEndingWith("Message")
        .`as`("[CUSTOM MSG] Classes in the message package should be suffixed with 'Message'")
}