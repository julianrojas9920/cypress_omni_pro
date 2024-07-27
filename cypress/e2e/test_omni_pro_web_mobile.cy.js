import locators from '../selectors/locators.css.js'
import { getElement, generateRandomNineDigitNumber } from '../support/utils.js'

describe('Test for alkosto in web mobile', () => {
    it('Validate happy path in purchase a product with registered user', () => {
        cy.viewport('samsung-note9')

        cy.visit('https://www.alkosto.com/')

        getElement(locators.searchField).should('be.visible').type('Xbox Series S{enter}')

        getElement(locators.productItemTitle).should('be.visible')

        getElement(locators.searchResults).should('be.visible').contains('Series S').click({ force: true })

        getElement(locators.buyNowButton).should('be.visible').and('be.enabled').click({ force: true })

        getElement(locators.goToCartButton).should('be.visible').click({ force: true })

        getElement(locators.productCheckout).should('be.visible').and('be.enabled').click()

        getElement(locators.emailField).should('be.visible').type('a@a.com')

        getElement(locators.continueToCheckout).should('be.visible').and('be.enabled').click()

        getElement(locators.deliveryMethodButton).should('be.visible').and('be.enabled').click()

        getElement(locators.continuePaymentPse).should('be.visible').eq(1).click()

        getElement(locators.selectBank).should('be.visible').click()

        getElement(locators.listOfOptions).should('be.visible').contains('NEQUI').click()

        getElement(locators.documentField).should('be.visible').type('1023874890')

        getElement(locators.continueOfMethodPayment).should('be.visible').and('be.enabled').eq(0).click()

        getElement(locators.totalAmount).should('be.visible').eq(1)

        getElement(locators.payNowButtonMobile).should('be.visible').and('be.enabled')
    }),

    it('Validate happy path in purchase a product with a new user', () => {

        const randomNumber = generateRandomNineDigitNumber();
        const email = `testAuto+${randomNumber}@prueba.com`;

        cy.viewport('samsung-note9')

        cy.visit('https://www.alkosto.com/')

        getElement(locators.searchField).should('be.visible').type('Xbox Series S{enter}')

        getElement(locators.productItemTitle).should('be.visible')

        getElement(locators.searchResults).should('be.visible').contains('Series S').click({ force: true })

        getElement(locators.buyNowButton).should('be.visible').and('be.enabled').click({ force: true })

        getElement(locators.goToCartButton).should('be.visible').click({ force: true })

        getElement(locators.productCheckout).should('be.visible').and('be.enabled').click()

        getElement(locators.emailField).should('be.visible').type(email)

        getElement(locators.continueToCheckout).should('be.visible').and('be.enabled').click()

        getElement(locators.firstNameInput).should('be.visible').type('Prueba Auto First')

        getElement(locators.lastNameInput).should('be.visible').type('Prueba Auto Last')

        getElement(locators.phoneInput).should('be.visible').type('3123179097')

        getElement(locators.authorizeTerms).should('be.visible').eq(1).click()

        getElement(locators.createUserButton).should('be.visible').click()

        getElement(locators.addressIdTypeDocument).should('be.visible').eq(0).click()

        getElement(locators.selectDocument).should('be.visible').eq(0).click()

        getElement(locators.addressIdDocument).should('be.visible').type('1023874890')

        getElement(locators.departmentField).should('be.visible').eq(0).click()

        getElement(locators.listOfOptions).should('be.visible').contains('Bogota dc').click()

        getElement(locators.addressInput).should('be.visible').type('Cra 104 #148 - 07')

        getElement(locators.addressDistrict).should('be.visible').type('Mazuren')

        getElement(locators.continueAddressButton).should('be.visible').click()

        getElement(locators.confirmSelectAddress).should('be.visible').eq(0).click()

        getElement(locators.confirmAddressButon).should('be.visible').click()

        getElement(locators.deliveryMethodButton).should('be.visible').and('be.enabled').click()

        getElement(locators.continuePaymentPse).should('be.visible').eq(1).click()

        getElement(locators.selectBank).should('be.visible').click()

        getElement(locators.listOfOptions).should('be.visible').contains('NEQUI').click()

        getElement(locators.documentField).should('be.visible').type('1023874890')

        getElement(locators.continueOfMethodPayment).should('be.visible').and('be.enabled').eq(0).click()

        getElement(locators.totalAmount).should('be.visible').eq(1)

        getElement(locators.payNowButtonMobile).should('be.visible').and('be.enabled')
    }),

    it('Validate add and delete product from cart', () => {
        cy.viewport('samsung-note9')

        cy.visit('https://www.alkosto.com/')

        getElement(locators.searchField).should('be.visible').type('MacBook Air{enter}')

        getElement(locators.productItemTitle).should('be.visible')

        getElement(locators.searchResults).should('be.visible').contains('MacBook Air de 13').click()

        getElement(locators.buyNowButton).should('be.visible').and('be.enabled').click()

        getElement(locators.goToCartButton).should('be.visible').click({ force: true })

        getElement(locators.countProducts).should('be.visible').should('contain.text', '1')
    })
})
