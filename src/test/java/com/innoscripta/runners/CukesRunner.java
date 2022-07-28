package com.innoscripta.runners;

import io.cucumber.testng.CucumberOptions;

@CucumberOptions(

        plugin = {},
        features = { "src/test/resources/features"
        },
        glue = "com/innoscripta/stepdefinitions",
//        tags = "@smoke",
        dryRun = false
)
public class CukesRunner {

}