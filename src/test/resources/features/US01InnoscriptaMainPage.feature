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

  Scenario: TC_04_US_01 The user should be able to make a free appointment.
    Then user clicks on "Termin für kostenlose Erstberatung vereinbaren" button
    And user clicks on "Cookies Ablehnen" button in iframe
    And user clicks to today&time on calendar and accepts appointment
    Then user fills out the appointment form
    |Name       |Testmann                                   |
    |E-Mail     |test@test.com                              |
    |Unternehmen|testfirma                                  |
    |Info       |Dies ist eine Testaufgabe, bitte ignorieren|
    And user books an appointment
    Then user verifies that appointment is booked

  Scenario: TC_05_US_01 user should be able to download flyer.
    Then user clicks on "Kurzerklärung über die Forschungszulage herunterladen" button
    And user fills out the flyer form
      |Vorname         |Test         |
      |Nachname        |Testmann     |
      |Unternehmensname|testfirma    |
      |E-Mail          |test@test.com|
    Then user clicks on download button
    And user verifies that the flyer process begin

  Scenario: TC_06_US_01 "Beratungsgespräch vereinbaren" process must work properly.
    Then user scroll down the screen to "Beratungsgespräch vereinbaren" position
    And user fills out the consultation form
      |Vorname         |Test         |
      |Nachname        |Testmann     |
      |E-Mail          |test@test.com|
      |Telefon         |01234567     |
      |Unternehmensname|testfirma    |
      |Ihre Nachricht  |Dies ist eine Testaufgabe, bitte ignorieren|
    Then user clicks on "Absenden" button
    And user verifies that the request was successfully sent

  Scenario: TC_07_US_01 "Transparenz in F&E-Prozessen" query in the customer's must be sent successfully.
    Then user scroll down the screen to "warum Transparenz in F&E-Prozessen" position
    And user fills out the download-doc form
      |Vorname         |Test         |
      |Nachname        |Testmann     |
      |E-Mail          |test@test.com|
      |Telefon         |01234567     |
      |Unternehmensname|testfirma    |
    Then user clicks on -Daten senden und herunterladen- button
    And user verifies that documnet was successfully downloaded
