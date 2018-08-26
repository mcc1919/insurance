 const use = require('./data')
 var name=use.RandomName()
 var phone = use.Randomphone()
 var cases=use.Random_type(29)+1//0:1天  1:2-3天 2:4-7天 3:8-10天 4:11-20天 5:21-30天
describe('中国大地保险', function() {
 beforeEach(function() {
            cy.fixture('user.json').as('user')
        })
 it('产品目录', function() {
    const user = this.user
    cy.visit(user.URL)
    cy.wait(2000)
    cy.contains('旅行无忧').click()
    cy.url().should('include', 'groupmessage')
    cy.wait(5000)
    cy.contains('立即购买').click()
    cy.get('#ApplyCity').click()
    cy.contains('北京市').click()
    cy.contains('市辖区').click()
    cy.contains('东城区').click()
    if(cases==1){
        cy.get('#expiredDate > select').select(cases+' 天')
        cy.contains('立即试算').click()
        cy.contains('￥3.80').should(($p) => {
            expect($p).to.contain('￥3.80') 
            })
        }
    if(cases>=2 && cases<=3){
        cy.get('#expiredDate > select').select(cases +' 天')
        cy.contains('立即试算').click()
        cy.contains('￥5.80').should(($p) => {
            expect($p).to.contain('￥5.80') 
            })
        }
    if(cases>=4 && cases<=7){
        cy.get('#expiredDate > select').select(cases +' 天')
        cy.contains('立即试算').click()
        cy.contains('￥6.30').should(($p) => {
            expect($p).to.contain('￥6.30') 
            })
    }
    if(cases>=8 && cases<=10){
        cy.get('#expiredDate > select').select(cases +' 天')
        cy.contains('立即试算').click()
        cy.contains('￥9.50').should(($p) => {
            expect($p).to.contain('￥9.50') 
            })
    }
    if(cases>=11 && cases<=20){
        cy.get('#expiredDate > select').select(cases +' 天')
        cy.contains('立即试算').click()
        cy.contains('￥16.10').should(($p) => {
            expect($p).to.contain('￥16.10') 
            })
    }
    if(cases>=21 && cases<=30){
        cy.get('#expiredDate > select').select(cases +' 天')
        cy.contains('立即试算').click()
        cy.contains('￥21.60').should(($p) => {
            expect($p).to.contain('￥21.60') 
            })
    }
    cy.get('body > div > div > form > div.action-bar.ng-scope > button').click()
    cy.get('#PH001').type(name)
    cy.get('#PH006').type('110101195503072197')
    cy.get('#PH013').type(phone)
    cy.get('#PH015').type(phone+'@qq.com')
    cy.contains('下一步').click()
    cy.wait(5000)
    cy.get('label > .ng-pristine')
    .click()
    cy.contains('确认购买').click()
    cy.wait(15000)
    cy.contains('已完成支付').should(($p) => {
                    expect($p).to.contain('已完成支付')
                })
})
})