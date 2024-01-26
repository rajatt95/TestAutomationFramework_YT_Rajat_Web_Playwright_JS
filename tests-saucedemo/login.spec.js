// @ts-check
const { test, expect } = require('@playwright/test');

// Loading login credentials from JSON file
const loginCredentials = require('../test-data/login_credentials.json');  

// Extracting credentials for both valid and invalid cases
const {
  credentials_1: { valid_username, valid_password },
  credentials_2: { invalid_username, invalid_password }
} = loginCredentials.data;


test('[LOGIN] Login with valid credentials. Validate that User is able to login using valid credentials. @regression @sanity', async ({ page }) => {
  
  // Navigate to application
  await page.goto('/');

  // Fill valid credentials and Login 
  await page.locator('[data-test="username"]').fill(valid_username)
  await page.locator('[data-test="password"]').fill(valid_password)
  await page.locator('[data-test="login-button"]').click()

  // Assertions for successful login

  // Verify the heading on the Products page
  await expect(page.locator('.title')).toHaveText('Products')
  
  // Verify the logo on the header
  await expect(page.locator('.app_logo')).toHaveText('Swag Labs')

  // Verify the copyright message in the footer
  await expect(page.locator('.footer_copy')).toContainText(' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')

  // Verify that LinkedIn link in the footer is present
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible()

  // Verify the href attribute and value for the LinkedIn link in the footer
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/company/sauce-labs/')
  
});

test('[LOGIN] Login with invalid credentials. Validate that User is unable to login using invalid credentials. @regression', async ({ page }) => {
  
  // Navigate to application
  await page.goto('/');

  // Fill invalid credentials and Login 
  await page.locator('[data-test="username"]').fill(invalid_username)
  await page.locator('[data-test="password"]').fill(invalid_password)
  await page.locator('[data-test="login-button"]').click()

  // Verify the error message for Username and Password not match with any User
  await expect(page.locator("//h3[contains(text(),'do not match')]")).toContainText('Username and password do not match')
  
});

