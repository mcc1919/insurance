const use = require('./data')
var name = use.RandomName()
var phone = use.Randomphone()
var cases = use.Random_type(2) //0:A款  1:B款 2:C款
describe('中国大地保险', function() {
    beforeEach(function() {
            cy.fixture('user.json').as('user')
        })
  it('产品目录', function() {
    const user = this.user
    cy.visit(user.URL)
    cy.wait(2000)
    cy.contains('假期护家保').click()
    cy.url().should('include', 'groupmessage')
    cy.wait(3000)
    cy.get('#wrapper > div.view.page-transition > main > div.travel-info > div.info-tab-body > div:nth-child(5) > div > div > div > div')
    .click()
    cy.contains('浙江省').click()
    cy.contains('嘉兴市').click()
    cy.contains('市辖区').click()
    if(cases==0){
        cy.get('#selectedPlan').select('A款')
        cy.contains('￥9.90').should(($p) => {
            expect($p).to.contain('￥9.90') 
            })
        }
    if(cases==1){cy.get('#selectedPlan').select('B款')
               cy.contains('￥19.90').should(($p) => {
                    expect($p).to.contain('￥19.90') 
                })
       }
    if(cases==2){cy.get('#selectedPlan').select('C款')
    cy.contains('￥39.90').should(($p) => {
                    expect($p).to.contain('￥39.90') 
                })
        }
    cy.wait(2000)
    cy.contains('立即购买').click()
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(1) > div:nth-child(2) > div > div > input.inputTxt')
    .type(name)
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(1) > div:nth-child(4) > div > div > input.inputTxt')
    .type('110101199003076050')
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(1) > div:nth-child(6) > div > div > input.inputTxt')
    .type(phone)
    cy.get('#wrapper > div.view.page-transition > main > div > div:nth-child(1) > div:nth-child(7) > div > div > input.inputTxt')
    .type(phone+'@qq.com')
    cy.get('#wrapper > div.view.page-transition > main > div > div:nth-child(3) > div:nth-child(3) > div > div > input.inputTxt')
    .type('嘉兴市禾兴南路658号')
    cy.get('#wrapper > div.view.page-transition > main > div > div:nth-child(3) > div:nth-child(4) > div > div > input.inputTxt')
    .type('354566')
    cy.contains('确认信息').click()
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(11) > div > label > i')
    .click()
    cy.contains('确认购买').click()
    cy.wait(15000)
    cy.contains('大地保险支付测试帐号').click()
    cy.wait(8000)
    cy.contains('已完成支付').should(($p) => {
                    expect($p).to.contain('已完成支付')
                })
})
})