const use = require('./data')
 var name = use.RandomName()
 var phone = use.Randomphone()
 var date1 = use.Nowdate()
 var date2 = use.nowMonth()
 var cases = use.Random_type(1)//0:升级款  1:基础款 
describe('中国大地保险',function() {
    beforeEach(function() {
            cy.fixture('user.json').as('user')
        })
  it('产品目录', function() {
    const user = this.user
    cy.visit(user.URL)
    cy.contains('运动意外险').click()
    cy.url().should('include', 'groupmessage')
    cy.wait(2000)
     if(cases==0){
        cy.get('body > div > div > section.product-brief-info-box.clearfix.ng-scope > div.product-plan > form > div > div > select')
    .select('升级款')
        }
     if(cases==1){
        cy.get('body > div > div > section.product-brief-info-box.clearfix.ng-scope > div.product-plan > form > div > div > select')
    .select('基础款')
        }
    cy.contains('立即购买').click()
    cy.get('#effectiveDate').clear()
    cy.get('#effectiveDate').type(date1)
    cy.get('#expiredDate').clear()
    cy.get('#expiredDate').type(date2)
    cy.get('#ApplyCity').click()
    cy.contains('北京市').click()
    cy.contains('市辖区').click()
    cy.contains('东城区').click()
    cy.contains('立即试算').click()
    if(cases==0){
        cy.contains('￥22.50').should(($p) => {
            expect($p).to.contain('￥22.50') 
            })
        }
    if(cases==1){
        cy.contains('￥7.50').should(($p) => {
            expect($p).to.contain('￥7.50') 
            })
        }
    cy.contains('下一步').click()
    cy.get('#PH001').type(name)
    cy.get('#PH006').type('110101199003071866')
    cy.get('#PH013').type(phone)
    cy.get('#PH015').type(phone+'@qq.com')
    cy.contains('下一步').click()
    cy.wait(2000)
    cy.get('label > .ng-pristine').click()
    cy.contains('确认购买').click()
   // cy.wait(12000)
    cy.contains('已完成支付').should(($p) => {
                    expect($p).to.contain('已完成支付')
                })
})
})