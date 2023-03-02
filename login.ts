import { faker } from '@faker-js/faker';
const { Selector,ClientFunction  } = require("testcafe");
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const zipCode = faker.address.zipCode();

//Access the demo site https://www.saucedemo.com
fixture`Test structure`
    .page`https://www.saucedemo.com/`;
    

test('Test saucedemo', async t => {

    const container = Selector('#item_5_title_link');
    const interfaceSelect = Selector('#item_5_title_link');
    const interfaceOption = interfaceSelect.find('49.99');
    const getInterface        = ClientFunction(() =>document.getElementById('#item_5_title_link')?.ariaValueMax)

    
//Login to the system with following credentials
    await t
    .wait(1000)
    .typeText("#user-name", "performance_glitch_user")
    .wait(1000)
    .typeText("#password", "secret_sauce")
    .wait(1000)
    .click("#login-button")
    .wait(1000)
    .expect(Selector(".title").innerText).eql('Products')
    .wait(2000)
      

//Check the price of product, Sauce Labs Fleece Jacket is $49.99
    .scroll(container)
    .wait(2000)
    .click(interfaceSelect)
    .wait(4000)
    .click("#back-to-products")
    .wait(4000)
    

//Add any two products into the cart
     .click("#add-to-cart-sauce-labs-onesie") 
     .wait(2000)
     .click("#add-to-cart-sauce-labs-bolt-t-shirt")
     .wait(2000)


//Click cart icon in the top 
     .click("#shopping_cart_container")
     .wait(2000)


//*Verify if the selected items are in the cart 
     .expect(Selector(".title").innerText).eql('Your Cart')
     .wait(3000)

     
//Click checkout button 
      .click("#checkout")
      .wait(2000)

//Provide a random firstname, lastname and a zip code in the next page 
      .typeText("#first-name", faker.name.firstName())
      .wait(2000)
      .typeText("#last-name", faker.name.lastName())
      .wait(2000)
      .typeText("#postal-code", faker.address.zipCode())
      .wait(2000)


//Click continue button 
     .click("#continue")
     .wait(2000)


//Click Finish
    .click("#finish")
    .wait(3000)

});



