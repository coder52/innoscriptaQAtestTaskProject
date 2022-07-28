package com.innoscripta.stepdefinitions;

import com.innoscripta.pages.InnoscriptaMainPage;
import com.innoscripta.utilities.BrowserUtils;
import com.innoscripta.utilities.Driver;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.Point;
import org.testng.Assert;

import java.util.List;
import java.util.Map;

public class US01InnoscriptaMainPageStepDefinitions {
    InnoscriptaMainPage page = new InnoscriptaMainPage();

    @Given("user is on page {string}")
    public void user_is_on_page(String url) {
        Driver.getDriver().get(url);
        Driver.getDriver().manage().window().maximize();
    }

    @When("user clicks {string} on privacy settings window")
    public void userClicksOnPrivacySettingsWindow(String privacySelection) {
        BrowserUtils.waitForPageToLoad(5);
        String denyJSPath = "document.querySelector(\"#usercentrics-root\").shadowRoot." +
                "querySelector(\"#uc-center-container > div.sc-bYoBSM.egarKh > div > div.sc-dlVxhl.bEDIID > " +
                "div > button:nth-child(1)\")";
        String acceptAllJSPath = "document.querySelector(\"#usercentrics-root\").shadowRoot." +
                "querySelector(\"#uc-center-container > div.sc-bYoBSM.egarKh > div > div.sc-dlVxhl.bEDIID > " +
                "div > button:nth-child(2)\")";
        String jsPath = privacySelection.equals("Denny") ? denyJSPath : acceptAllJSPath;
        BrowserUtils.clickOnElementWithJS(jsPath);
    }


    @Then("user clicks menu items on header and verifies that the screen slides to the proper position")
    public void userClicksOnHeader(DataTable table) throws InterruptedException {
        List<List<String>> rows = table.asLists(String.class);
        for (List<String> row : rows) {
            for (String item : row) {
                String classNames = null;
                switch (item) {
                    case "Unsere Leistungen":
                        page.unsereLeistungenMenuItem.click();
                        Thread.sleep(3000);
                        classNames = page.unsereLeistungenMenuItem.getAttribute("class");//getCssValue(cssStr);
                        break;
                    case "innoscripta logo":
                        page.logoInnoscriptaMenuItem.click();
                        Thread.sleep(3000);
                        classNames = page.willkommenMenuItem.getAttribute("class");
                        break;
                    case "Unsere Software":
                        page.unsereSoftwareMenuItem.click();
                        Thread.sleep(3000);
                        classNames = page.unsereSoftwareMenuItem.getAttribute("class");
                        break;
                    case "Success Stories":
                        page.successStoriesMenuItem.click();
                        Thread.sleep(3000);
                        classNames = page.successStoriesMenuItem.getAttribute("class");
                        break;
                    case "Über uns":
                        page.uberUnsMenuItem.click();
                        Thread.sleep(3000);
                        classNames = page.uberUnsMenuItem.getAttribute("class");
                        break;
                    case "Soziales Engagement":
                        page.sozialesEngagementMenuItem.click();
                        Thread.sleep(3000);
                        classNames = page.sozialesEngagementMenuItem.getAttribute("class");
                        break;
                    case "Kontakt":
                        page.kontaktMenuItem.click();
                        Thread.sleep(3000);
                        classNames = page.kontaktMenuItem.getAttribute("class");
                        break;
                    case "Willkommen":
                        page.willkommenMenuItem.click();
                        Thread.sleep(3000);
                        classNames = page.willkommenMenuItem.getAttribute("class");
                        break;
                    case "Kostenloses Erstgespräch vereinbaren":
                        page.kostenlosesErstgesprachVereinbarenMenuItem.click();
                        Thread.sleep(3000);
                        classNames = page.kostenlosesErstgesprachVereinbarenMenuItem.getAttribute("class");
                        break;
                    default:
                        Assert.fail(item + " not implemented for search fields");
                }
                Assert.assertTrue(classNames.contains("item_active"));
            }
        }
        Driver.closeDriver();
    }

}
