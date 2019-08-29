package org.cucmber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/resources",glue="org.cucmber",plugin="html: target")
public class Testrunner {
	

}
