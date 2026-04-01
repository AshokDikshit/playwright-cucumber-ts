Feature: Access Playwright

Open playwright portal
Navigate to Get started

  Scenario: Successful navigation on playwright portal
    Given the user navigates to "https://lseg.wd3.myworkdayjobs.com/en-US/Careers/job/London%2C-United-Kingdom/Senior-Manager--Quality-Assurance_R0113961-1/apply/autofillWithResume?source=Linkedin"
    When the user enter "ashokkumardikshit@gmail.com" in "email"
    And the user enter "Chakde@01" in "password"
    And the user enter "Chakde@01" in "verifyPassword"
    And the user click on Create Account
    Then verify page title has "Sign In"
    And the user login with emailid and password
