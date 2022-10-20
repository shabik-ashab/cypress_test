
import { LoginPage } from './pages/login_page';

const loginPage = new LoginPage();

describe('all login test',()=>{

    beforeEach(()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    })

    it.only('pom',()=> {

        loginPage.enterUserName('Admin');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();
    
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    
        // cy.get('.oxd-button').click()
    
    })
    
    it('login test2',()=> {
    
        loginPage.enterUserName('Admin122');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();
    
    })

})

