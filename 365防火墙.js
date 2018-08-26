const use = require('./data')
var name=use.RandomName()
var phone = use.Randomphone()
var cases=use.Random_type(5)//0:1份  1:2份 2:3份 3:4份 4:5份 5:6份
 describe('中国大地保险', function() {
    beforeEach(function() {
            cy.fixture('user.json').as('user')
        })
  it('产品目录', function() {
  	const user = this.user
    cy.visit(user.URL)
    cy.contains('爱家计划').click()
    cy.url().should('include', 'groupmessage')
    cy.wait(2000)
    cy.get('#wrapper > div.view.page-transition > main > div.travel-info > div.info-tab-body > div:nth-child(5) > div > div > div > div')
    .click()
    cy.contains('上海').click()
    cy.contains('市辖区').click()
    cy.contains('黄浦区').click()
    if(cases==0){
        cy.get('#wrapper > div.view.page-transition > main > div.travel-info > div.info-tab-body > div:nth-child(6) > div > div > select')
        .select('1')
        cy.contains('￥52.00').should(($p) => {
            expect($p).to.contain('￥52.00')
            })
        }
     if(cases==1){
        cy.get('#wrapper > div.view.page-transition > main > div.travel-info > div.info-tab-body > div:nth-child(6) > div > div > select')
        .select('2')
        cy.contains('￥104.00').should(($p) => {
            expect($p).to.contain('￥104.00')
            })
        }
    if(cases==2){
        cy.get('#wrapper > div.view.page-transition > main > div.travel-info > div.info-tab-body > div:nth-child(6) > div > div > select')
        .select('3')
        cy.contains('￥156.00').should(($p) => {
            expect($p).to.contain('￥156.00')
            })
        }
    if(cases==3){
        cy.get('#wrapper > div.view.page-transition > main > div.travel-info > div.info-tab-body > div:nth-child(6) > div > div > select')
        .select('4')
        cy.contains('￥208.00').should(($p) => {
            expect($p).to.contain('￥208.00')
            })
        }
    if(cases==4){
        cy.get('#wrapper > div.view.page-transition > main > div.travel-info > div.info-tab-body > div:nth-child(6) > div > div > select')
        .select('5')
        cy.contains('￥260.00').should(($p) => {
            expect($p).to.contain('￥260.00')
            })
        }
    if(cases==5){
        cy.get('#wrapper > div.view.page-transition > main > div.travel-info > div.info-tab-body > div:nth-child(6) > div > div > select')
        .select('6')
        cy.contains('￥312.00').should(($p) => {
            expect($p).to.contain('￥312.00')
            })
        }
    cy.contains('立即购买').click()
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(1) > div:nth-child(2) > div > div > input.inputTxt')
    .type(name)
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(1) > div:nth-child(4) > div > div > input.inputTxt')
    .type('110101199003075605')
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(1) > div:nth-child(6) > div > div > input.inputTxt')
    .type(phone)
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(1) > div:nth-child(7) > div > div > input.inputTxt')
    .type(phone+'@qq.com')
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(3) > div:nth-child(3) > div > div > input.inputTxt')
    .type('河北省石家庄市槐安东路136号')
    cy.get('#wrapper > div.view.page-transition > main > div.policyInfo > div:nth-child(3) > div:nth-child(4) > div > div > input.inputTxt')
    .type('100000')
    cy.contains('确认信息').click()
    cy.wait(2000)
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