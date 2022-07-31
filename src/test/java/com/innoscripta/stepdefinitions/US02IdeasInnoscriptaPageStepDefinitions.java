package com.innoscripta.stepdefinitions;

import com.innoscripta.pages.IdeasInnoscriptaPage;
import com.innoscripta.utilities.BrowserUtils;
import com.innoscripta.utilities.Driver;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;
import java.util.Map;

public class US02IdeasInnoscriptaPageStepDefinitions {

    IdeasInnoscriptaPage page = new IdeasInnoscriptaPage();

    @Then("user clicks menu buttons on ideas.innoscripta and verifies that the screen slides to the proper position")
    public void userClicksOnHeader(DataTable table) {
        List<List<String>> rows = table.asLists(String.class);
        WebElement element;
        for (List<String> row : rows) {
            for (String item : row) {
                element = Driver.getDriver().findElement(By.xpath("//*[. = '"+item+"']//a"));
                element.click();
                BrowserUtils.waitFor(3);
                String className = element.getAttribute("class");
                Assert.assertTrue(className.contains("active"));
            }
        }
    }

    @And("user fills out the Create account form")
    public void userFillsOutTheCreateAccountForm(DataTable table) {
        Map<String, String> map = table.asMap(String.class, String.class);
        for (String key: map.keySet()) {
            WebElement input = Driver.getDriver()
                    .findElement(By.cssSelector("#prof-info *[placeholder=\""+key+"\"]"));
            input.sendKeys(map.get(key));
        }
        // university
        page.universityInput.sendKeys("Hochschule Kaiserslautern");
        page.hochschuleKaiserslautern.click();
        page.universityInput.sendKeys(Keys.TAB);
    }

    @And("user selects with maus that text inputs of anrede and titel in form")
    public void userSelectsWithMausThatTextInputsOfAnredeAndTitelInForm() {
        // anrede
        page.herrSex.click();
        // title
        page.titleInput.click();
        page.sonstigesTitle.click();
    }

    @And("user agrees to the terms of use")
    public void userAgreesToTheTermsOfUse() {
        page.termsCheckbox.click();
        BrowserUtils.waitFor(1);
    }

    @Then("user verifies that his account has been successfully created")
    public void userVerifiesThatHisAccountHasBeenSuccessfullyCreated() {
        String text = page.accountCreatedText.getText();
        Assert.assertTrue(text.contains("erfolgreich"));
    }


    @Then("user enters text to inputs of anrede and titel in form")
    public void userEntersTextToInputsOfAnredeAndTitelInForm() {
        // anrede
        page.sexInput.sendKeys("Herr");
//        page.herrSex.click();
        // title
        page.titleInput.sendKeys("Sonstiges");
//        page.sonstigesTitle.click();
    }

    @And("user verifies that the form has been successfully filled")
    public void userVerifiesThatTheFormHasBeenSuccessfullyFilled() {
        boolean isCheckbox =page.termsCheckbox.isDisplayed();
        Assert.assertTrue(isCheckbox);
    }

    @Then("user verifies that form filling process is canceled")
    public void userVerifiesThatFormFillingProcessIsCanceled() {
        boolean boardDisplayed = page.accountCreatedFormBoard.isDisplayed();
        Assert.assertFalse(boardDisplayed);
    }
}
