package org.cucmber;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AddUser {
	static WebDriver driver;
	@Given("User Should Launch The Browser")
	public void user_Should_Launch_The_Browser() {
		System.setProperty("webdriver.chrome.driver", "D:\\WorkSpace\\Cucumber_Suit\\Driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
	}
	
	@Given("User Click The Add User")
	public void user_Click_The_Add_User() {
			driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
			//driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	}
	//Two d Map
	@When("User Should Give The valid DetailTdMp")
	public void user_Should_Give_The_valid_DetailTdMp(io.cucumber.datatable.DataTable dataTable) {
		List<Map<String, String>> tdMap = dataTable.asMaps(String.class, String.class);
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(tdMap.get(0).get("fname"));
		driver.findElement(By.id("lname")).sendKeys(tdMap.get(0).get("lname"));
		driver.findElement(By.id("email")).sendKeys(tdMap.get(0).get("email"));
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(tdMap.get(0).get("address"));
		driver.findElement(By.id("telephoneno")).sendKeys(tdMap.get(0).get("phone"));
		driver.findElement(By.xpath("//input[@name='submit']")).click();
	}
	
	//One D Map
	@When("User Should Give The valid DetailOdMp")
	public void user_Should_Give_The_valid_DetailOdMp(io.cucumber.datatable.DataTable userData) {
		Map<String, String> mp = userData.asMap(String.class, String.class);
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(mp.get("fname"));
		driver.findElement(By.id("lname")).sendKeys(mp.get("lname"));
		driver.findElement(By.id("email")).sendKeys(mp.get("email"));
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(mp.get("address"));
		driver.findElement(By.id("telephoneno")).sendKeys(mp.get("phone"));
		driver.findElement(By.xpath("//input[@name='submit']")).click();

	}
	//For Scen Outline
	@When("User Should Give The valid DetailScO{string},{string},{string},{string},{string}")
	public void user_Should_Give_The_valid_DetailScO(String fname, String lname, String email, String address,
			String phone) {
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(fname);
		driver.findElement(By.id("lname")).sendKeys(lname);
		driver.findElement(By.id("email")).sendKeys(email);
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(address);
		driver.findElement(By.id("telephoneno")).sendKeys(phone);
		driver.findElement(By.xpath("//input[@name='submit']")).click();
	}
	//Normal Scenario
	@When("User Should Give The valid Detail")
	public void user_Should_Give_The_valid_Detail() {
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys("Mohamed");
		driver.findElement(By.id("lname")).sendKeys("Raseem");
		driver.findElement(By.id("email")).sendKeys("raseem.moha@gmail.com");
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys("Chennai");
		driver.findElement(By.id("telephoneno")).sendKeys("9876543321");
		driver.findElement(By.xpath("//input[@name='submit']")).click();
	}

	@Then("I validate the customer id Showing or not")
	public void i_validate_the_customer_id_Showing_or_not() {
			Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());

	}
	

}
