package com.innoscripta.runners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(

        plugin = {
                "pretty",
                "html:target/cucumber-report"
                 },
        features = { "src/test/resources/features/US01InnoscriptaMainPage.feature"},
        glue = "com/innoscripta/stepdefinitions",
//        tags = "@fail",
        dryRun = false,
        monochrome = true
)
public class CukesRunner extends AbstractTestNGCucumberTests {

}