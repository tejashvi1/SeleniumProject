var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.manage().window().maximize();

driver.get('file:///C:/Users/Tejashvi/Desktop/SilviyaPrj/Final_Laptop/Register.html');

var first = driver.wait(until.elementLocated(By.id('fn')))
first.sendKeys("Silviya");

var last = driver.wait(until.elementLocated(By.id('ln')))
last.sendKeys("Paskaleva");

var email = driver.wait(until.elementLocated(By.id('email')))
email.sendKeys("silviya@gmail.com");

var pwd = driver.wait(until.elementLocated(By.id('password')))
pwd.sendKeys("123456");

var cpwd = driver.wait(until.elementLocated(By.id('cp')))
cpwd.sendKeys("123456");

var loginBtn = driver.wait(until.elementLocated(By.id('submit')))
loginBtn.sendKeys(webdriver.Key.ENTER);
