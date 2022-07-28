package com.innoscripta.utilities;

import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.*;

public class BrowserUtils {

    /**
     * waits for backgrounds processes on the browser to complete
     *
     * @param timeOutInSeconds
     */
    public static void waitForPageToLoad(long timeOutInSeconds) {
        ExpectedCondition<Boolean> expectation = new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver driver) {
                return ((JavascriptExecutor) driver).executeScript("return document.readyState").equals("complete");
            }
        };
        try {
            WebDriverWait wait = new WebDriverWait(Driver.getDriver(), timeOutInSeconds);
            wait.until(expectation);
        } catch (Throwable error) {
            error.printStackTrace();
        }
    }

    public static void clickOnElementWithJS(String jsPath){
        JavascriptExecutor jse = (JavascriptExecutor) Driver.getDriver();
        WebElement element = (WebElement) jse.executeScript("return "+jsPath);
        String js = "arguments[0].click()";
        jse.executeScript(js,element);
    }

    /**
     * Performs a pause
     *
     * @param seconds
     */
    public static void waitFor(int seconds) {
        try {
            Thread.sleep(seconds * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}


