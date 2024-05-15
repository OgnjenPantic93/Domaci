import Helper from "../support/helper"
const helper = new Helper()

describe('First test', () =>{
    beforeEach(()=>{
        //navigate to the ladning page
        cy.visit('https://onboarding.qa.sleepio.com/valmont')
        //navigate to the get started page
        cy.contains('button',"Am I covered?").should('be.visible').eq(0).click({force: true})
        //ensuring that we are on the correct page
        cy.url().should('include', 'valmont/356#2/1') 
    })

    it.only('From first to the last page',() =>{
      //FirstPage
      cy.contains('Continue').should('be.disabled')
      cy.fixture('example.json').then(question=> helper.SingleSelect(question.answers.Q1, 5))
      helper.buttonClick('Continue')
      
      //SecodnPage
      cy.contains('Continue').should('be.disabled')
      cy.url().should('include', 'valmont/356#2/2') 
      cy.fixture('example.json').then(question=> helper.DropDownOption(question.answers.Q2, 5))
      helper.DropDownSelect(8)
      helper.buttonClick('Continue')

      //ThirdPage
      cy.contains('Continue').should('be.disabled')
      cy.url().should('include', 'valmont/356#2/3') 
      cy.fixture('example.json').then(question=> helper.SingleSelect(question.answers.Q3, 2))
      helper.buttonClick('Continue')

      //ForthPage
      cy.contains('Continue').should('be.disabled')
      cy.url().should('include', 'valmont/356#2/4')
      cy.fixture('example.json').then(question=>helper.SingleSelect(question.answers.Q4, 5))
      helper.buttonClick('Continue')

      //FifthPage
      cy.contains('Continue').should('be.disabled')
      cy.url().should('include', 'valmont/356#2/5')
      cy.fixture('example.json').then(question=>helper.DropDownOption(question.answers.Q5, 10))
      helper.DropDownSelect(10)
      helper.buttonClick('Continue')

      //sixthPage
      cy.contains('Continue').should('be.disabled')
      cy.url().should('include', 'valmont/356#2/6')
      cy.fixture('example.json').then(question=>helper.MultiSelectCheckbox(question.answers.Q6, 5))
      helper.MultiUnselectCheckbox(4)
      helper.buttonClick('Continue')

      //seventhPage
      cy.contains('Continue').should('be.disabled')
      cy.url().should('include', 'valmont/356#2/7')
      cy.fixture('example.json').then(question=>helper.MultiSelectCheckbox(question.answers.Q7, 5))
      helper.MultiUnselectCheckbox(4)
      helper.buttonClick('Continue')

      //eightPage
      cy.contains('Continue').should('be.disabled')
      cy.url().should('include', 'valmont/356#2/8')
      cy.fixture('example.json').then(question=>helper.SingleSelect(question.answers.Q8, 4))
      helper.buttonClick('Continue')

      //ninthPage
      cy.contains('Continue').should('be.disabled')
      cy.fixture('example.json').then(question=> helper.ErrorMessages(1.2,1.2,2005, question.errorMessages.E1[0]))
      cy.fixture('example.json').then(question=> helper.ErrorMessages(1,1.2,2005, question.errorMessages.E2[0]))
      cy.fixture('example.json').then(question=> helper.ErrorMessages(1,1,2025, question.errorMessages.E3[0]))
      cy.fixture('example.json').then(question=> helper.ErrorMessages(1,1,2015, question.errorMessages.E4[0]))

      helper.ValidDateOfBirth(1,5,1993)
      helper.buttonClick('Continue')


      //Sign up page
      cy.contains('Sign Up').should('be.disabled')
      cy.get('input[name="first_name"]').type("Zika")
      cy.get('input[name="last_name"]').type("Peric")
      cy.get('input[name="email"]').type('performance+testdelete' + Date.now() + '@bighealth.com')
      cy.get('input[name="password"]').type("Itekako123")
      cy.get('input[name="confirm-password"]').type("Itekako123")
      cy.get('[data-testid="question-input-checkbox"]').eq(0).click()
      cy.get('[data-testid="question-input-checkbox"]').eq(1).check()
      helper.buttonClick('Sign Up')
      cy.contains('Tailor Sleepio').eq(0).click()

      //firstQuestionPage
      cy.get('.emotion-nr7joz').should("have.text", "Question 1/20")
      cy.get('#sleep_efficiency_time_into_bed').select(10)
      cy.get('#sleep_efficiency_time_try_to_sleep').select("12:00 AM")
      cy.get('#sleep_efficiency_to_fall_asleep_total_time').select("20 mins")
      cy.get('#sleep_efficiency_awakenings_in_night').select("1")
      cy.get('#sleep_efficiency_awakenings_total_time').select("15 mins")
      cy.get('#sleep_efficiency_time_final_awakening').select("8:00 AM")
      cy.get('#earlier_intended_wake_up').select(1)
      cy.get('#sleep_efficiency_time_get_out_of_bed').select("9:00 AM")
      cy.get('#sleep_efficiency_sleep_quality').select(5)
      helper.buttonClick('Continue')

      //seconQuestionPage
      cy.get('.emotion-nr7joz').should("have.text", "Question 2/20")
      cy.fixture('example.json').then(question=> helper.SingleSelect(question.answers.Q1, 5))
      // cy.get('input[data-testid="question-input-radio"]').eq(2).click()
      helper.buttonClick('Continue')

      //thirdQuestionPage
      cy.get('.emotion-nr7joz').should("have.text", "Question 3/20")
      cy.fixture('example.json').then(question=> helper.SingleSelect(question.answers.Q1, 5))
      helper.buttonClick('Continue')

      //forthQuestionPage
      cy.get('.emotion-nr7joz').should("have.text", "Question 4/20")
      cy.fixture('example.json').then(question=> helper.SingleSelect(question.answersTwo.Q1, 3))
      helper.buttonClick('Continue')

      //fifthQuestionPage
      cy.get('.emotion-nr7joz').should("have.text", "Question 5/20")
      cy.fixture('example.json').then(question=> helper.DropDownOption(question.answersTwo.Q2, 3))
      helper.DropDownSelect(2)
      helper.buttonClick('Continue')

      //sixthQuestionPage
      cy.get('.emotion-nr7joz').should("have.text", "Question 6/20")
      cy.fixture('example.json').then(question=> helper.DropDownOption(question.answersTwo.Q2, 3))
      helper.DropDownSelect(2)
      helper.buttonClick('Continue')

      //seventhQuestionPage
      cy.get('.emotion-nr7joz').should("have.text", "Question 7/20")
      cy.fixture('example.json').then(question=> helper.SingleSelect(question.answersTwo.Q1, 3))
      helper.buttonClick('Continue')

      //eighthQuestionPage
      cy.get('.emotion-nr7joz').should("have.text", "Question 8/20")
      cy.fixture('example.json').then(question=> helper.SingleSelect(question.answersTwo.Q3, 4))
      helper.buttonClick('Continue')

      //ninthQuestionPage
      cy.get('.emotion-nr7joz').should("have.text", "Question 9/20")
      cy.fixture('example.json').then(question=> helper.SingleSelect(question.answersTwo.Q3, 4))
      helper.buttonClick('Continue')

      //tenthQuestionPage
      cy.get('.emotion-nr7joz').should("have.text", "Question 10/20")
      cy.fixture('example.json').then(question=> helper.SingleSelect(question.answersTwo.Q3, 4))
      helper.buttonClick('Continue')

      //eleventhQuestionPage
      cy.get('.emotion-nr7joz').should("have.text", "Question 11/20")
      cy.fixture('example.json').then(question=> helper.SingleSelect(question.answersTwo.Q3, 4))
      helper.buttonClick('Continue')

      //twelfthQuestionPage
      cy.get('.emotion-nr7joz').should("have.text", "Question 12/20")
      cy.fixture('example.json').then(question=> helper.SingleSelect(question.answersTwo.Q4, 5))
      helper.buttonClick('Continue')

      //thirteenthQuestionPage
      cy.get('.emotion-nr7joz').should("have.text", "Question 13/20")
      cy.fixture('example.json').then(question=> helper.SingleSelect(question.answersTwo.Q5, 3))
      helper.buttonClick('Continue')

      cy.get('.emotion-nr7joz').should("have.text", "Question 14/20")
      helper.OptionEmploymentStatus()
    })

    it('test', () => {
      cy.visit("https://onboarding.qa.sleepio.com/sleepio/valmont/356#9/1")

      cy.get('.emotion-nr7joz').should("have.text", "Question 14/20")
      // cy.fixture('example.json').then(question=> helper.DropDownOption(question.answersTwo.Q6, 3))
      helper.OptionEmploymentStatus()
    })
    // let allanswers = Cypress._.map($elements, 'innerText')

})