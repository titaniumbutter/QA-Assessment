import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')
const { test, describe } = require('@jest/globals')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    await (await driver).findElement(By.id('start-game')).click();

    await driver.sleep(1000)

});

describe ('Winning moves', function () {

test('I can make a diagonal line', async () => {

    await driver.get('http://localhost:4000');

    await (await driver).findElement(By.id('start-game')).click();
    
    await driver.sleep(1000)

    await driver.findElement(By.id('cell-0')).click();

    await driver.sleep(1000)

    await driver.findElement(By.id('cell-4')).click();

    await driver.sleep(1000)

    await driver.findElement(By.id('cell-8')).click();

    await driver.sleep(1000)


});

test('I can make a horizontal line', async () => {

    await driver.get('http://localhost:4000');

    await (await driver).findElement(By.id('start-game')).click();
    
    await driver.sleep(1000)

    await driver.findElement(By.id('cell-6')).click();

    await driver.sleep(1000)

    await driver.findElement(By.id('cell-7')).click();

    await driver.sleep(1000)

    await driver.findElement(By.id('cell-8')).click();

    await driver.sleep(1000)

});

test('I can make a horizontal line', async () => {

    await driver.get('http://localhost:4000');

    await (await driver).findElement(By.id('start-game')).click();
    
    await driver.sleep(1000)

    await driver.findElement(By.id('cell-1')).click();

    await driver.sleep(1000)

    await driver.findElement(By.id('cell-4')).click();

    await driver.sleep(1000)

    await driver.findElement(By.id('cell-7')).click();

    await driver.sleep(1000)

});
});

describe ('Losing move', function () {

    test('This is how you lose the game', async () => {

        await driver.get('http://localhost:4000');

        await (await driver).findElement(By.id('start-game')).click();
        
        await driver.sleep(1000)

        await driver.findElement(By.id('cell-6')).click();

        await driver.sleep(1000)

        await driver.findElement(By.id('cell-4')).click();

        await driver.sleep(1000)

        await driver.findElement(By.id('cell-8')).click();

        await driver.sleep(1000)
    });
});