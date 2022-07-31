Feature: US02 The functions of the elements in the ideas.innoscripta page should work properly

  Background: User accesses the website
    Given user is on page "http://ideas.innoscripta.com/"
    When user clicks "Denny" on privacy settings window

  Scenario: TC01_US02 When the menu buttons are clicked, the screen should be dragged to the proper position.
    Then user clicks menu buttons on ideas.innoscripta and verifies that the screen slides to the proper position
      |Wer|Was|Wie|Beispiele|FAQ|Über UNS|Kontakt|

  Scenario: TC02_US02 It should be possible to register using the "Registrieren" button.
    Then user clicks on "Registrieren" button
    And user fills out the Create account form
      |Vorname hier eingeben  |Test                 |
      |Nachname hier eingeben |Testmann             |
      |Website hier eingeben  |https://www.hs-kl.de/|
      |+49                    |+491234567           |
      |E-Mail hier eingeben   |test@test.com        |
    And user selects with maus that text inputs of anrede and titel in form
    Then user clicks on "Weiter" button
    And user agrees to the terms of use
    When user clicks on "Einreichen" button
    Then user verifies that his account has been successfully created

  Scenario: TC03_US02 All input boxes in the Create an account form should be able to enter text.
    Then user clicks on "Registrieren" button
    And user fills out the Create account form
      |Vorname hier eingeben  |Test                 |
      |Nachname hier eingeben |Testmann             |
      |Website hier eingeben  |https://www.hs-kl.de/|
      |+49                    |+491234567           |
      |E-Mail hier eingeben   |test@test.com        |
    Then user enters text to inputs of anrede and titel in form
    When user clicks on "Weiter" button
    And user verifies that the form has been successfully filled

  Scenario: TC04_US02 The Create an account form filling process can be terminated before it is completed
    Then user clicks on "Registrieren" button
    And user clicks on "Abbrechen" button
    Then user verifies that form filling process is canceled






