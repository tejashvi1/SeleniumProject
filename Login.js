var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.manage().window().maximize();

driver.get('file:///C:/Users/Tejashvi/Desktop/SilviyaPrj/Final_Laptop/Login.html');

var userId = driver.wait(until.elementLocated(By.id('email')))
userId.sendKeys("silviya@gmail.com");

var pwd = driver.wait(until.elementLocated(By.id('password')))
pwd.sendKeys("123456");


var loginBtn = driver.wait(until.elementLocated(By.id('submit')))
loginBtn.sendKeys(webdriver.Key.ENTER);


