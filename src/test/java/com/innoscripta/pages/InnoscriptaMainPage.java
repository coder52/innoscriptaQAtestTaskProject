package com.innoscripta.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

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

    public By cookiesAblehnenButton = By.cssSelector("div #onetrust-reject-all-handler");
    public By appointmentFrame = By.cssSelector("div.calendly-popup iframe");

    @FindBy(css = "td button[type='button']")
    public List<WebElement> daysInCalendar;

    @FindBy(css = ".calendly-popup-content iframe")
    public WebElement calendarFrame;

    @FindBy(css = "button div[data-component*='today-dot']")
    public WebElement todayInCalendar;

    @FindBy(css = "button[data-container='time-button']")
    public WebElement timeButtonInCalendar;

    @FindBy(xpath = "(//*[. = 'Bestätigen'])[1]")
    public WebElement timeAcceptationButton;

    @FindBy(id = "full_name_input")
    public WebElement nameInput;

    @FindBy(id = "email_input")
    public WebElement emailInput;

    @FindBy(css = "input[name=\"question_0\"]")
    public WebElement firmaNameInput;

    @FindBy(css = "textarea[name=\"question_1\"]")
    public WebElement infoInput;

    @FindBy(xpath = "(//*[. = 'Termin buchen'])[1]")
    public WebElement terminBuchenButton;

    @FindBy(css = ".download-flyer-section input[placeholder=\"Vorname\"]")
    public WebElement flyerVornameInput;

    @FindBy(css = ".download-flyer-section input[placeholder=\"Nachname\"]")
    public WebElement flyerNachnameInput;

    @FindBy(css = ".download-flyer-section input[placeholder=\"Unternehmensname\"]")
    public WebElement flyerUnternehmensnameInput;

    @FindBy(css = ".download-flyer-section input[placeholder=\"E-Mail\"]")
    public WebElement flyerEMailInput;

    @FindBy(css = ".flyer-download-modal__button-wrap .download-button")
    public WebElement downloadFlyerButton;

    @FindBy(css = ".download-result__header")
    public WebElement downloadResultHeader;

    @FindBy(css = "#initialConsultation input[placeholder=\"Vorname\"]")
    public WebElement consultationVornameInput;

    @FindBy(css = ".consultation-result__header")
    public WebElement consultationResultHeader;

}
