Feature: Candidate Interview Result Verification

  Scenario:  Confirms that a candidate's status changes to "Interview Passed" when they successfully pass the interview.

    Given Admin is logged in
    And  Theres an existing Employee
    And Job Title has a Vacancy
    And Candidate with status "Interview Scheduled" exists

    When Admin changes the candidate status to "Interview Passed"
    Then Candidate status should be updated to "Status: Interview Passed"

  Scenario: Confirms that a candidate's status changes to "Interview Failed" when they don't pass the interview.

    Given Admin is logged in
    And  Theres an existing Employee
    And Job Title has a Vacancy
    And Candidate with status "Interview Scheduled" exists

    When Admin changes the candidate status to "Interview Failed" 
    Then Candidate status should be updated "Status: Interview Failed"