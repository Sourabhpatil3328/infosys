package com.step;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class appconstant {

	public static WebDriver d=null;
	public static WebDriver browserInit() {
		WebDriverManager.chromedriver().setup();
		WebDriver d=new ChromeDriver();
		return d;		
	}
	
	
}
