const use = require('./data')
var name = use.RandomName()
var phone = use.Randomphone()
var cases = use.Random_type(2) //0:方案一  1:方案二  2:方案三
describe('中国大地保险', function() {
    beforeEach(function() {
            cy.fixture('user.json').as('user')
        })
  it('产品目录', function() {
    const user = this.user
    cy.visit(user.URL)
    cy.wait(5000)
    cy.get('#wrapper > main > div > div > div:nth-child(16) > div.list-depict > h3').click()
    cy.url().should('include', 'groupmessage')
    cy.wait(5000)
    if(cases==0){
        cy.get('body > div > div > section.product-brief-info-box.clearfix.ng-scope > div.product-plan > form > div > div > select')
        .select('方案一')
            }
    if(cases==1){
        cy.get('body > div > div > section.product-brief-info-box.clearfix.ng-scope > div.product-plan > form > div > div > select')
        .select('方案二')
            } 
    if(cases==2){
        cy.get('body > div > div > section.product-brief-info-box.clearfix.ng-scope > div.product-plan > form > div > div > select')
        .select('方案三')
            }               
        
    cy.contains('立即购买').click()
    cy.get('#ApplyCity').click()
    cy.contains('北京市').click()
    cy.contains('市辖区').click()
    cy.contains('东城区').click()
    cy.get('#ISP003').type('1998-07-08')
    cy.get('#ISP006').select('本人')
    cy.get('body > div > div > form > div.pre-calculation-box-wrap.ng-scope > button').click()
    if(cases==0){
        cy.contains('￥56.00').should(($p) => {
            expect($p).to.contain('￥56.00') 
            })
        }
    if(cases==1){
        cy.contains('￥68.00').should(($p) => {
            expect($p).to.contain('￥68.00') 
            })
        }
    if(cases==2){
        cy.contains('￥118.00').should(($p) => {
            expect($p).to.contain('￥118.00') 
            })
        }
    cy.contains('下一步').click()
    cy.get('#PH001').type(name)
    cy.get('#PH006').type('110101199807084072')
    cy.get('#PH013').type(phone)
    cy.get('#PH015').type(phone+'@qq.com')
    cy.get('#InsuredType').select('法定')
    cy.wait(2000)
    cy.get('body > div > div > form > section:nth-child(4) > div.panel > div.panel-body > div > div:nth-child(1) > div > label:nth-child(2) > input')
    .click()
    cy.get('body > div > div > form > section:nth-child(4) > div.panel > div.panel-body > div > div:nth-child(2) > div > label:nth-child(2) > input')
    .click()
    cy.get('body > div > div > form > section:nth-child(4) > div.panel > div.panel-body > div > div:nth-child(3) > div > label:nth-child(2) > input')
    .click()
    cy.get('body > div > div > form > section:nth-child(4) > div.panel > div.panel-body > div > div:nth-child(4) > div > label:nth-child(2) > input')
    .click()
    cy.get('body > div > div > form > section:nth-child(4) > div.panel > div.panel-body > div > div:nth-child(5) > div > label:nth-child(2) > input')
    .click()
    cy.get('body > div > div > form > section:nth-child(4) > div.panel > div.panel-body > div > div:nth-child(6) > div > label:nth-child(2) > input')
    .click()
    cy.contains('下一步').click()
    cy.get('body > div > div > form.form-horizontal.ng-pristine.ng-valid.ng-scope.ng-valid-required > div > div.checkbox.agree-term > label > input')
    .click()
    cy.contains('确认购买').click()
    cy.wait(15000)
    cy.contains('已完成支付').should(($p) => {
                    expect($p).to.contain('已完成支付')
                })
    })
    })
    