package com.innoscripta.stepdefinitions;

import com.innoscripta.pages.InnoscriptaMainPage;
import com.innoscripta.utilities.BrowserUtils;
import com.innoscripta.utilities.Driver;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;
import java.util.Map;

public class US01InnoscriptaMainPageStepDefinitions {
    InnoscriptaMainPage page = new InnoscriptaMainPage();

    @Given("user is on page {string}")
    public void user_is_on_page(String url) {
        Driver.getDriver().get(url);
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
    public void userClicksOnHeader(DataTable table) {
        List<List<String>> rows = table.asLists(String.class);
        for (List<String> row : rows) {
            for (String item : row) {
                String classNames = null;
                switch (item) {
                    case "Unsere Leistungen":
                        page.unsereLeistungenMenuItem.click();
                        BrowserUtils.waitFor(3);
                        classNames = page.unsereLeistungenMenuItem.getAttribute("class");//getCssValue(cssStr);
                        break;
                    case "innoscripta logo":
                        page.logoInnoscriptaMenuItem.click();
                        BrowserUtils.waitFor(3);
                        classNames = page.willkommenMenuItem.getAttribute("class");
                        break;
                    case "Unsere Software":
                        page.unsereSoftwareMenuItem.click();
                        BrowserUtils.waitFor(3);
                        classNames = page.unsereSoftwareMenuItem.getAttribute("class");
                        break;
                    case "Success Stories":
                        page.successStoriesMenuItem.click();
                        BrowserUtils.waitFor(3);
                        classNames = page.successStoriesMenuItem.getAttribute("class");
                        break;
                    case "Über uns":
                        page.uberUnsMenuItem.click();
                        BrowserUtils.waitFor(3);
                        classNames = page.uberUnsMenuItem.getAttribute("class");
                        break;
                    case "Soziales Engagement":
                        page.sozialesEngagementMenuItem.click();
                        BrowserUtils.waitFor(3);
                        classNames = page.sozialesEngagementMenuItem.getAttribute("class");
                        break;
                    case "Kontakt":
                        page.kontaktMenuItem.click();
                        BrowserUtils.waitFor(3);
                        classNames = page.kontaktMenuItem.getAttribute("class");
                        break;
                    case "Willkommen":
                        page.willkommenMenuItem.click();
                        BrowserUtils.waitFor(3);
                        classNames = page.willkommenMenuItem.getAttribute("class");
                        break;
                    case "Kostenloses Erstgespräch vereinbaren":
                        page.kostenlosesErstgesprachVereinbarenMenuItem.click();
                        BrowserUtils.waitFor(3);
                        classNames = page.kostenlosesErstgesprachVereinbarenMenuItem.getAttribute("class");
                        break;
                    default:
                        Assert.fail(item + " not implemented for search fields");
                }
                Assert.assertTrue(classNames.contains("item_active"));
            }
        }
    }

    @And("user clicks on -Für Bewerber- menu button on the header")
    public void userClickOnMenuButtonOnTheHeader() {
        page.furBewerberMenuItem.click();
    }

    @Then("user verifies that {string} opened")
    public void userVerifiesThatOpened(String url) {
        BrowserUtils.waitForPageToLoad(5);
        String currentUrl = Driver.getDriver().getCurrentUrl();
        Assert.assertTrue(currentUrl.contains(url));
    }

    @Then("user clicks on {string} button")
    public void userClicksOnButton(String buttonText) {
        Driver.getDriver().findElement(By.xpath("//*[. = '"+buttonText+"']")).click();


    }
    @And("user clicks on {string} button in iframe")
    public void userClicksOnButtonInIframe(String arg0) {
        BrowserUtils.waitFor(1);
        BrowserUtils.clickElementInFrame(page.appointmentFrame, page.cookiesAblehnenButton);
    }

    @And("user clicks to today&time on calendar and accepts appointment")
    public void userClicksTodayTimeOnClandar() {
        BrowserUtils.waitFor(1);
        // switch in to frame
        Driver.getDriver().switchTo().frame(page.calendarFrame);
        List<WebElement> elements = page.daysInCalendar;
        for (WebElement element:elements) {
            if(element.getCssValue("color").equals("rgba(0, 96, 230, 1)")){
                element.click();
                break;
            }
        }
        page.timeButtonInCalendar.click();
        page.timeAcceptationButton.click();
    }

    @Then("user fills out the appointment form")
    public void userFillsOutTheAppointmentForm(DataTable table) {
        Map<String, String> map = table.asMap(String.class, String.class);
        for (String key: map.keySet()) {
            switch (key){
                case "Name":
                    page.nameInput.sendKeys(map.get(key));
                    break;
                case "E-Mail":
                    page.emailInput.sendKeys(map.get(key));
                    break;
                case "Unternehmen":
                    page.firmaNameInput.sendKeys(map.get(key));
                    break;
                case "Info":
                    page.infoInput.sendKeys(map.get(key));
                    break;
                default:
                    Assert.fail(key + " not implemented for search fields");
            }
        }
    }

    @And("user books an appointment")
    public void userBooksAnAppointment() {
        BrowserUtils.waitFor(1);
        page.terminBuchenButton.click();
    }

    @And("user fills out the flyer form")
    public void userFillsOutTheFlyerForm(DataTable table) {
        Map<String, String> map = table.asMap(String.class, String.class);
        for (String key: map.keySet()) {
            switch (key){
                case "Vorname":
                    page.flyerVornameInput.sendKeys(map.get(key));
                    break;
                case "Nachname":
                    page.flyerNachnameInput.sendKeys(map.get(key));
                    break;
                case "Unternehmensname":
                    page.flyerUnternehmensnameInput.sendKeys(map.get(key));
                    break;
                case "E-Mail":
                    page.flyerEMailInput.sendKeys(map.get(key));
                    break;
                default:
                    Assert.fail(key + " not implemented for search fields");
            }
        }
    }


    @Then("user clicks on download button")
    public void userClicksOnDownloadButton() {
        BrowserUtils.waitFor(1);
        page.downloadFlyerButton.click();
    }

    @And("user verifies that the flyer process begin")
    public void userVerifiesThatTheProcessBegin() {
        String text = page.downloadResultHeader.getText();
        Assert.assertTrue(text.toLowerCase().contains("vielen dank"));
    }

    @Then("user scroll down the screen to {string} position")
    public void userScrollDownTheScreenToPosition(String arg0) {
        BrowserUtils.waitFor(1);
        JavascriptExecutor js = (JavascriptExecutor) Driver.getDriver();
        js.executeScript("arguments[0].scrollBy(1000,0)", page.consultationVornameInput);
    }

    @And("user fills out the consultation form")
    public void userFillsOutTheConsultationForm(DataTable table) {
        Map<String, String> map = table.asMap(String.class, String.class);
        for (String key: map.keySet()) {
            WebElement input = Driver.getDriver()
                    .findElement(By.cssSelector("#initialConsultation *[placeholder=\""+key+"\"]"));
            input.sendKeys(map.get(key));
        }

    }

    @And("user verifies that the request was successfully sent")
    public void userVerifiesThatTheRequestWasSuccessfullySent() {
        String text = page.consultationResultHeader.getText();
        Assert.assertTrue(text.toLowerCase().contains("vielen dank"));
    }
}
