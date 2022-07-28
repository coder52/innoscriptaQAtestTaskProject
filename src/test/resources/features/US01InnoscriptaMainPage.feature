Feature: US_01 The functions of the elements in the main page should work properly

  Background: User reaches the menu items
    Given user is on page "http://sff.innoscripta.com/"
    When user clicks "Denny" on privacy settings window

  Scenario: TC_01_US_01 When the menu buttons are clicked, the screen should be dragged to the proper position.
    Then user clicks menu items on header and verifies that the screen slides to the proper position
      |Unsere Leistungen|innoscripta logo|Unsere Software|Success Stories|Über uns|Soziales Engagement|Kontakt|Willkommen|

  Scenario: TC_02_US_01 When the "Kostenloses Erstgespräch vereinbaren" is clicked, the screen should be dragged to the proper position.
    Then user clicks menu items on header and verifies that the screen slides to the proper position
      |Kostenloses Erstgespräch vereinbaren|

  Scenario: TC_03_US_01 "Für Bewerber" menu button must link to another site
    And user clicks on -Für Bewerber- menu button on the header
    Then user verifies that "https://hr.innoscripta.com/" opened

  Scenario: TC_04_US_01 user can make an appointment
    Then user clicks on "Termin für kostenlose Erstberatung vereinbaren" button
    And user clicks to today&time on calendar and accepts appointment
    Then user fills out the appointment form
    |Name       |Testmann                                   |
    |E-Mail     |test@test.com                              |
    |Unternehmen|testfirma                                  |
    |Info       |Dies ist eine Testaufgabe, bitte ignorieren|
    And user books an appointment