
import { LoginPage } from './pages/login_page';

const loginPage = new LoginPage();

it('pom',()=> {

    cy.visit("https://opensource-demo.orangehrmlive.com/")

    loginPage.enterUserName('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();

    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    // cy.get('.oxd-button').click()

})