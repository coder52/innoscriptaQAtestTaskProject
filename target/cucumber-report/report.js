$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US01InnoscriptaMainPage.feature");
formatter.feature({
  "name": "US_01 The functions of the elements in the main page should work properly",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "User accesses the website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on page \"http://sff.innoscripta.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"Denny\" on privacy settings window",
  "keyword": "When "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnPrivacySettingsWindow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_01_US_01 When the menu buttons are clicked, the screen should be dragged to the proper position.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks menu items on header and verifies that the screen slides to the proper position",
  "rows": [
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnHeader(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User accesses the website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on page \"http://sff.innoscripta.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"Denny\" on privacy settings window",
  "keyword": "When "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnPrivacySettingsWindow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02_US_01 When the \"Kostenloses Erstgespräch vereinbaren\" is clicked, the screen should be dragged to the proper position.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@fail"
    }
  ]
});
formatter.step({
  "name": "user clicks menu items on header and verifies that the screen slides to the proper position",
  "rows": [
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnHeader(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnHeader(US01InnoscriptaMainPageStepDefinitions.java:95)\r\n\tat ✽.user clicks menu items on header and verifies that the screen slides to the proper position(file:///C:/Users/Sahin/IdeaProjects/innoscriptaQAtestTaskProject/src/test/resources/features/US01InnoscriptaMainPage.feature:12)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "TC_02_US_01 When the \"Kostenloses Erstgespräch vereinbaren\" is clicked, the screen should be dragged to the proper position._screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User accesses the website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on page \"http://sff.innoscripta.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"Denny\" on privacy settings window",
  "keyword": "When "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnPrivacySettingsWindow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_03_US_01 \"Für Bewerber\" menu button must link to another site",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on -Für Bewerber- menu button on the header",
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClickOnMenuButtonOnTheHeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"https://hr.innoscripta.com/\" opened",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userVerifiesThatOpened(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User accesses the website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on page \"http://sff.innoscripta.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"Denny\" on privacy settings window",
  "keyword": "When "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnPrivacySettingsWindow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_04_US_01 The user should be able to make a free appointment.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on \"Termin für kostenlose Erstberatung vereinbaren\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Cookies Ablehnen\" button in iframe",
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnButtonInIframe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks to today\u0026time on calendar and accepts appointment",
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksTodayTimeOnClandar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out the appointment form",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userFillsOutTheAppointmentForm(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user books an appointment",
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userBooksAnAppointment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that appointment is booked",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userVerifiesThatAppointmentIsBooked()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User accesses the website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on page \"http://sff.innoscripta.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"Denny\" on privacy settings window",
  "keyword": "When "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnPrivacySettingsWindow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_05_US_01 user should be able to download flyer.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on \"Kurzerklärung über die Forschungszulage herunterladen\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out the flyer form",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userFillsOutTheFlyerForm(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on download button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnDownloadButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that the flyer process begin",
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userVerifiesThatTheProcessBegin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User accesses the website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on page \"http://sff.innoscripta.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"Denny\" on privacy settings window",
  "keyword": "When "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnPrivacySettingsWindow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_06_US_01 \"Beratungsgespräch vereinbaren\" process must work properly.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user scroll down the screen to \"Beratungsgespräch vereinbaren\" position",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userScrollDownTheScreenToPosition(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out the consultation form",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userFillsOutTheConsultationForm(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Absenden\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that the request was successfully sent",
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userVerifiesThatTheRequestWasSuccessfullySent()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User accesses the website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on page \"http://sff.innoscripta.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"Denny\" on privacy settings window",
  "keyword": "When "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnPrivacySettingsWindow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_07_US_01 \"Transparenz in F\u0026E-Prozessen\" query in the customer\u0027s must be sent successfully.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user scroll down the screen to \"warum Transparenz in F\u0026E-Prozessen\" position",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userScrollDownTheScreenToPosition(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out the download-doc form",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userFillsOutTheDownloadDocForm(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on -Daten senden und herunterladen- button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnDatenSendenUndHerunterladenButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that documnet was successfully downloaded",
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userVerifiesThatDocumnetWasSuccessfullyDownloaded()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US02IdeasInnoscriptaPage.feature");
formatter.feature({
  "name": "US02 The functions of the elements in the ideas.innoscripta page should work properly",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "User accesses the website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on page \"http://ideas.innoscripta.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"Denny\" on privacy settings window",
  "keyword": "When "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnPrivacySettingsWindow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_US02 When the menu buttons are clicked, the screen should be dragged to the proper position.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks menu buttons on ideas.innoscripta and verifies that the screen slides to the proper position",
  "rows": [
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US02IdeasInnoscriptaPageStepDefinitions.userClicksOnHeader(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User accesses the website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on page \"http://ideas.innoscripta.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"Denny\" on privacy settings window",
  "keyword": "When "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnPrivacySettingsWindow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC02_US02 It should be possible to register using the \"Registrieren\" button.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on \"Registrieren\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out the Create account form",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US02IdeasInnoscriptaPageStepDefinitions.userFillsOutTheCreateAccountForm(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects with maus that text inputs of anrede and titel in form",
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US02IdeasInnoscriptaPageStepDefinitions.userSelectsWithMausThatTextInputsOfAnredeAndTitelInForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Weiter\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user agrees to the terms of use",
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US02IdeasInnoscriptaPageStepDefinitions.userAgreesToTheTermsOfUse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Einreichen\" button",
  "keyword": "When "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that his account has been successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US02IdeasInnoscriptaPageStepDefinitions.userVerifiesThatHisAccountHasBeenSuccessfullyCreated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User accesses the website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on page \"http://ideas.innoscripta.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"Denny\" on privacy settings window",
  "keyword": "When "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnPrivacySettingsWindow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC03_US02 All input boxes in the Create an account form should be able to enter text.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on \"Registrieren\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out the Create account form",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US02IdeasInnoscriptaPageStepDefinitions.userFillsOutTheCreateAccountForm(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters text to inputs of anrede and titel in form",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US02IdeasInnoscriptaPageStepDefinitions.userEntersTextToInputsOfAnredeAndTitelInForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Weiter\" button",
  "keyword": "When "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that the form has been successfully filled",
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US02IdeasInnoscriptaPageStepDefinitions.userVerifiesThatTheFormHasBeenSuccessfullyFilled()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat com.innoscripta.stepdefinitions.US02IdeasInnoscriptaPageStepDefinitions.userVerifiesThatTheFormHasBeenSuccessfullyFilled(US02IdeasInnoscriptaPageStepDefinitions.java:88)\r\n\tat ✽.user verifies that the form has been successfully filled(file:///C:/Users/Sahin/IdeaProjects/innoscriptaQAtestTaskProject/src/test/resources/features/US02IdeasInnoscriptaPage.feature:35)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "TC03_US02 All input boxes in the Create an account form should be able to enter text._screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User accesses the website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on page \"http://ideas.innoscripta.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"Denny\" on privacy settings window",
  "keyword": "When "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnPrivacySettingsWindow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC04_US02 The Create an account form filling process can be terminated before it is completed",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on \"Registrieren\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Abbrechen\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US01InnoscriptaMainPageStepDefinitions.userClicksOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that form filling process is canceled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.innoscripta.stepdefinitions.US02IdeasInnoscriptaPageStepDefinitions.userVerifiesThatFormFillingProcessIsCanceled()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});