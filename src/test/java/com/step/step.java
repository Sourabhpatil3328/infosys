package com.step;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class step {
	
	public static WebDriver d;
	
	
@Given("^user navigate to facebook page$") 
public void user_navigate_to_facebook_page() throws Throwable {
	WebDriverManager.chromedriver().setup();
	d=new ChromeDriver();
	 d.get("https://www.facebook.com");
	
    
}

@When("^user entered valid  username$")
public void user_entered_valid_username()throws Throwable {
	WebElement user=d.findElement(By.xpath("//input[@id='email']"));
	   user.sendKeys("patil123@gmail.com");
}

@When("^user entered valid password$")
public void user_entered_valid_password() throws Throwable{
	WebElement pass=d.findElement(By.xpath("//input[@id='pass']"));
	  pass.sendKeys("admin@123");
}

@Then("^click on login button$")
public void click_on_login_button()throws Throwable  {
	WebElement button=d.findElement(By.xpath("(//*[text()='Log in'])[1]"));
	button.click(); 
}
}
