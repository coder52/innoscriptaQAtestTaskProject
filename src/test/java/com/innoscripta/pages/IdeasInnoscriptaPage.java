package com.innoscripta.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class IdeasInnoscriptaPage extends BasePage{

    @FindBy(css = "input[placeholder='Universität hier eingeben']")
    public WebElement universityInput;

    @FindBy(id = "title-dropdown-input")
    public WebElement titleInput;

    @FindBy(css = "input[name='sex']")
    public WebElement sexInput;

    @FindBy(xpath = "//li[text()='Herr']")
    public WebElement herrSex;

    @FindBy(css = "li[onclick*='Sonstiges']")
    public WebElement sonstigesTitle;

    @FindBy(css = "li[onclick*=\"529\"]")
    public WebElement hochschuleKaiserslautern;

    @FindBy(css = "#terms-checkbox")
    public WebElement termsCheckbox;

    @FindBy(css = "#terms-checkbox")
    public WebElement accountCreatedText;

    @FindBy(css = "#professor-modal")
    public WebElement accountCreatedFormBoard;
}
