package com.innoscripta.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class InnoscriptaMainPage extends BasePage{

    @FindBy(xpath = "//a[. = 'Unsere Leistungen']")
    public WebElement unsereLeistungenMenuItem;

    @FindBy(id = "logo_blue_svg__Ebene_1")
    public WebElement logoInnoscriptaMenuItem;

    @FindBy(xpath = "//a[. = 'Unsere Software']")
    public WebElement unsereSoftwareMenuItem;

    @FindBy(xpath = "//a[. = 'Success Stories']")
    public WebElement successStoriesMenuItem;

    @FindBy(xpath = "//a[. = 'Über uns']")
    public WebElement uberUnsMenuItem;

    @FindBy(xpath = "//a[. = 'Soziales Engagement']")
    public WebElement sozialesEngagementMenuItem;

    @FindBy(xpath = "//a[. = 'Kontakt']")
    public WebElement kontaktMenuItem;

    @FindBy(xpath = "//a[. = 'Für Bewerber']")
    public WebElement furBewerberMenuItem;

    @FindBy(xpath = "//a[. = 'Kostenloses Erstgespräch vereinbaren']")
    public WebElement kostenlosesErstgesprachVereinbarenMenuItem;

    @FindBy(xpath = "//a[. = 'Willkommen']")
    public WebElement willkommenMenuItem;
}
