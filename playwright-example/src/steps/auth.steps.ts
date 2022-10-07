import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';

Given("I am {string}", async function (this: ICustomWorld, name: string) {
  const user = require(`../fixtures/users/${name.toLowerCase()}.json`)
  expect(user).not.toBeNull()
  this.state.user = user
})

When('I visit ayyeka site', async function (this: ICustomWorld) {
  const page = this.page!
  await page.goto("https://home-stage-v2.ayyeka.com/");
  await page.locator('#loginForm').waitFor();
})

Then('I enter my credentials and login', async function (this: ICustomWorld) {
  const page = this.page!
  
  const emailField = page.locator('#username')
  await expect(emailField).toBeVisible()
  
  const pwdField = page.locator('#Password')
  await expect(pwdField).toBeVisible()

  await emailField.type(this.state.user.email)
  await pwdField.type(this.state.user.password)

  await page.$eval('form', (form) => form.submit());
})

Then('I should see the home page', async function (this: ICustomWorld) {
  const page = this.page!

  await expect(page).toHaveURL(/.*Home\/Index/, { timeout: 180 * 1000 });
  await expect(page.locator('#OwnerApp_0')).toBeVisible()
  await expect(page.locator('#AppHeader_0 > div.dojoxExpandoWrapper > div > div.navBodyLeading > img')).toBeVisible()
})