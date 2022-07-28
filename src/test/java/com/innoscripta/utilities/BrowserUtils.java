package com.innoscripta.utilities;

import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.*;

public class BrowserUtils {

    /**
     * waits for backgrounds processes on the browser to complete
     *
     * @param timeOutInSeconds maximum time
     */
    public static void waitForPageToLoad(long timeOutInSeconds) {
        ExpectedCondition<Boolean> expectation = driver -> ((JavascriptExecutor) driver)
                .executeScript("return document.readyState")
                .equals("complete");
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
     * @param seconds standby time
     */
    public static void waitFor(int seconds) {
        try {
            Thread.sleep(seconds * 1000L);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    /**
     *  This method switches the frame from default to another one inside the default frame.
     *
     * @param elementCss css selector of a target frame in the current frame.
     * @param frameCss css selector of an element in the target frame.
     */
    public static void clickElementInFrame(By frameCss, By elementCss) {
        // switch in to frame
        Driver.getDriver().switchTo().frame(Driver.getDriver().findElement(frameCss));
        // click on element in frame
        Driver.getDriver().findElement(elementCss).click();
        // switch back to default content
        Driver.getDriver().switchTo().defaultContent();
    }
}


