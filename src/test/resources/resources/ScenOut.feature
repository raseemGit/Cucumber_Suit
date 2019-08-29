
@tag
Feature: To Add Customer By Scen Outline
  I want to use this template for my feature file


  @tag2
   Scenario Outline: To Generate A Five Set Of Customer Id
    Given User Should Launch The Browser
    And User Click The Add User
    When User Should Give The valid DetailScO "<fname>","<lname>","<email>","<address>","<phone>"
    Then I validate the customer id Showing or not

    Examples: 
     | fname   | lname  | email                 | address    | phone       |
      | moha    | raseem | rcaseem.moha@gmail.com | chencnai    |  94425932436 |
      | krishn | kuma  | krcish@gmail.com       | tricchy     |  09876554321 |
      | jaif    | shre  | jcai@gmail.com         | coicmbatore | 098765342321 |
     