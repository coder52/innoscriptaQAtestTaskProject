Feature: US_01 The functions of the elements in the header should work properly

  Background: User reaches the menu items
    Given user is on page "http://sff.innoscripta.com/"
    When user clicks "Denny" on privacy settings window

#  Scenario: TC_01_US_01 When the menu buttons are clicked, the screen should be dragged to the proper position.
#    Then user clicks menu items on header and verifies that the screen slides to the proper position
#      |Unsere Leistungen|innoscripta logo|Unsere Software|Success Stories|Über uns|Soziales Engagement|Kontakt|Willkommen|

  Scenario: TC_02_US_01 When the "Kostenloses Erstgespräch vereinbaren" is clicked, the screen should be dragged to the proper position.
    Then user clicks menu items on header and verifies that the screen slides to the proper position
      |Kostenloses Erstgespräch vereinbaren|

  Scenario: TC_03_US_01 "Für Bewerber" menu button must link to another site
    And user click on -Für Bewerber- menu button on the header
    Then user verifies that "https://hr.innoscripta.com/" opened
