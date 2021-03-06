const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build(); // 以firefox浏览器为目标构建器
  try {
    await driver.get("https://www.baidu.com");
    await driver.findElement(By.className("s_ipt")).sendKeys("selenium"); // 找到输入框，填充内容
    await driver.findElement(By.className("s_btn")).sendKeys(Key.ENTER); // 触发enter键，执行搜索
    await driver.wait(until.titleIs("百度一下，你就知道"), 1000); // 判断title是否为“百度一下，你就知道”，不是则报错，是则继续执行
    console.log(222)
  } finally {
    // await driver.quit(); // 退出浏览器
  }
})();