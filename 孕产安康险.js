const use = require('./data')
var name=use.RandomName()
var phone = use.Randomphone()
describe('中国大地保险', function() {
    beforeEach(function() {
            cy.fixture('user.json').as('user')
        })
  it('产品目录', function() {
    const user = this.user
    cy.visit(user.URL)
    cy.contains('孕产安康险').click()
    cy.url().should('include', 'groupmessage')
    cy.wait(2000)
    cy.get('#wrapper > div.view.page-transition > main > div.travel-info > div.info-tab-body > div:nth-child(4) > div > div > input.inputTxt')
    .type('1990-01-02')
    cy.get('#wrapper > div.view.page-transition > main > div.travel-info > div.condition-sele > div.condition-body > div > label:nth-child(2) > span')
    .click()
    cy.contains('￥329.00').should(($p) => {
            expect($p).to.contain('￥329.00') 
            })
    cy.contains('立即购买').click()
    cy.wait(2000)
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(1) > div:nth-child(2) > div > div > input.inputTxt')
    .type(name)
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(1) > div:nth-child(4) > div > div > input.inputTxt')
    .type('11010119900307360X')
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(1) > div:nth-child(6) > div > div > input.inputTxt')
    .type(phone)
    cy.get('#wrapper > div.view.page-transition > main > div > div:nth-child(1) > div:nth-child(7) > div > div > input.inputTxt')
    .type(phone+'@qq.com')
    
    cy.contains('确认信息').click()
    cy.wait(2000)
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(8) > div > label > i').click()
    cy.wait(2000)
    cy.contains('确认购买').click()
   
  })
})
