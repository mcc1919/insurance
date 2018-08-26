const use = require('./data')
var name = use.RandomName()
var phone = use.Randomphone()
var cases = use.Random_type(6)//0：乳腺癌10份 1：子宫癌4份 2：子宫颈癌4份 3：暖巢癌3份 4：输卵管癌2份 5：阴道组织癌1份 6：妇科原位癌10份
describe('中国大地保险', function() {
  beforeEach(function() {
            cy.fixture('user.json').as('user')
        })
  it('产品目录', function() { 
    const user = this.user
    cy.visit(user.URL)
    cy.wait(2000)
    cy.contains('青年版').click()
    cy.url().should('include', 'groupmessage')
    if(cases==0){
        cy.get('body > div > div > section.product-brief-info-box.clearfix.ng-scope > div.product-plan > form > div > div > select')
        .select('乳腺癌保障（限购10份）')
        }
    if(cases==1){
        cy.get('body > div > div > section.product-brief-info-box.clearfix.ng-scope > div.product-plan > form > div > div > select')
        .select('子宫癌保障（限购4份）')
        }
    if(cases==2){
        cy.get('body > div > div > section.product-brief-info-box.clearfix.ng-scope > div.product-plan > form > div > div > select')
        .select('子宫颈癌保障（限购4份）')
        }
    if(cases==3){
        cy.get('body > div > div > section.product-brief-info-box.clearfix.ng-scope > div.product-plan > form > div > div > select')
        .select('卵巢癌保障（限购3份）')
        }
    if(cases==4){
        cy.get('body > div > div > section.product-brief-info-box.clearfix.ng-scope > div.product-plan > form > div > div > select')
        .select('输卵管癌保障（限购2份）')
        }
    if(cases==5){
        cy.get('body > div > div > section.product-brief-info-box.clearfix.ng-scope > div.product-plan > form > div > div > select')
        .select('阴道组织癌保障（限购1份）')
        }
    if(cases==6){
        cy.get('body > div > div > section.product-brief-info-box.clearfix.ng-scope > div.product-plan > form > div > div > select')
        .select('妇科原位癌保障（限购10份）')
        }
    cy.contains('立即购买').click()
    cy.get('#ApplyCity').click()
    cy.contains('北京市').click()
    cy.contains('市辖区').click()
    cy.contains('东城区').click()
    cy.get('#PurQuantity').type('1')
    cy.contains('立即试算').click()
    cy.contains('￥5.00').should(($p) => {
                    expect($p).to.contain('￥5.00') 
                })
    cy.contains('下一步').click()
    cy.get('#PH001').type(name)
    cy.get('#PH006').type('110101199003071866')
    cy.get('#PH013').type(phone)
    cy.get('#PH015').type(phone+'@qq.com')
    cy.get('body > div > div > form > section:nth-child(2) > div > div.panel-body > div > div > select')
    .select('本人')
    cy.get('#InsuredType').select('法定')
    cy.get('body > div > div > form > section:nth-child(4) > div.panel > div.panel-body > div > div:nth-child(1) > div > label:nth-child(2) > input')
    .click()
    cy.get('body > div > div > form > section:nth-child(4) > div.panel > div.panel-body > div > div:nth-child(2) > div > label:nth-child(2) > input')
    .click()
    cy.get('body > div > div > form > section:nth-child(4) > div.panel > div.panel-body > div > div:nth-child(3) > div > label:nth-child(2) > input')
    .click()
    cy.get('body > div > div > form > section:nth-child(4) > div.panel > div.panel-body > div > div:nth-child(4) > div > label:nth-child(2) > input')
    .click()
    cy.get('body > div > div > form > section:nth-child(4) > div.panel > div.panel-body > div > div:nth-child(5) > div > label:nth-child(2)')
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