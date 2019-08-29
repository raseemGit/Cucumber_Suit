@tag
Feature: To Add Customer By Two Dim Map
  I want to use this template for my feature file

  @tag1
  Scenario: Customer Should Provide The Detail
    Given User Should Launch The Browser
    And User Click The Add User
    When User Should Give The valid DetailTdMp
      | fname   | lname  | email                 | address    | phone       |
      | moqha    | raseem | raseqem.moha@gmail.com | chevnnai    |  9442932436 |
      | krishna | kumar  | krish@gmail.com       | trivchy     |  0987654321 |
      | jai     | shree  | jai@gmail.com         | coivmbatore | 09876342321 |
      | krishna | jai    | shree@gmail.com       | ponvdy      | 09809874321 |
      | mohamed | shree  | moha@gmail.com        | coivmbatore | 09876542321 |
    Then I validate the customer id Showing or not
