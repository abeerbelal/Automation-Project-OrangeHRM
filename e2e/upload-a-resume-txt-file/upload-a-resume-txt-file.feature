Feature: upload a txt file Verification

  Scenario:   Verify that the user can upload a txt file for Application Initiated statuses.

    Given Admin is logged in
    And  Theres an existing Employee
    And Job Title has a Vacancy
    And Candidate with status "Application Initiated" exists

    When Admin open the edit mode and upload a txt file for resume section then download it
    Then The uploaded file should contain the same data as was uploaded

  Scenario:  Verify that the user can upload a txt file for Hired statuses.

    Given Admin is logged in
    And  Theres an existing Employee
    And Job Title has a Vacancy
    And Candidate with status "Hired" exists

    When Admin open the edit mode and upload a txt file for resume section then download it
    Then The uploaded file should contain the same data as was uploaded