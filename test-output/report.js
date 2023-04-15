$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myfe.feature");
formatter.feature({
  "line": 1,
  "name": "Verify login Functionality",
  "description": "",
  "id": "verify-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "login Test",
  "description": "",
  "id": "verify-login-functionality;login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user navigate to facebook page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user entered valid  username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user entered valid password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "step.user_navigate_to_facebook_page()"
});
formatter.result({
  "duration": 1159532365,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.base.Preconditions.checkState(ZLjava/lang/String;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:125)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:156)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:346)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:91)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.step.step.user_navigate_to_facebook_page(step.java:21)\r\n\tat ✽.Given user navigate to facebook page(myfe.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "step.user_entered_valid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "step.user_entered_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "step.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
});