import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {page} from "../steps/base.hooks"

Given('the user navigates to {string}', async (url) => {
  await page.goto(url);
});

Then('the user enter {string} in {string}', async (argValue, argField) => {
  await expect(page.locator("//*[@data-automation-id='" + argField + "']")).toBeVisible();
  await page.locator("//*[@data-automation-id='" + argField + "']").fill(argValue);
});

When('the user click on Create Account', async () => {
  await page.locator("//*[@data-automation-id='createAccountCheckbox']").click();
  await page.locator("//*[@role='button']").click();
});

When('the user login with emailid and password', async () => {
  await page.locator("//*[@data-automation-id='email']").fill("ashokkumardikshit@gmail.com");
  await page.locator("//*[@data-automation-id='password']").fill("Chakde@01");
  await page.locator("//*[@role='button']").click();
});

Then('verify page title has {string}', async (arg) => {
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText(arg)).toBeVisible();
});
