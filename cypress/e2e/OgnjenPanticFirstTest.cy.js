// let o = {
//     test:(param)=>{
//         window.alert(param)
//     }
// }

let questionTracker = ".emotion-nr7joz";
let questionText = '[data-testid="pre-question-text"]';
let questionTitle = '[data-testid="question-title"]';
let radioButtons = '[data-testid="question-input-radio"]';
const radioButtonsText = '.emotion-10qbfiq'
let continueButton = '[data-testid="input-button-component"]'

function selectOnlyOneRadioButton(radioButtons, selectedIndex) 
{
    //select radio button and click on it
    cy.get(radioButtons).eq(selectedIndex).as("btn").click()

    //checking if the radio button is selected
    cy.get('@btn').should('be.checked');

    //checking if the rest of the radio button are not selected
    cy.get(radioButtons).each(($radioButton, index) => {
      if (index !== selectedIndex) {
        cy.wrap($radioButton).should('not.be.checked');
      }
    });
  }

function checkingRadioButtonText(radioButtons, selectedIndex, radioButtonText)
{
    //checking if the text insde of the radio button is correct 
    cy.get(radioButtons).eq(selectedIndex).as("btn")
    cy.get('@btn').should('have.text', radioButtonText);
}

function checkingCssStyle(radioButtons)
{
    cy.get(radioButtons).each(($radioButton)=>{

            //checking css color, font weight and font size of the radio buttons text
            cy.wrap($radioButton).should('have.css', 'color', 'rgb(22, 50, 88)')
            cy.wrap($radioButton).should('have.css', 'font-weight', '500')
            cy.wrap($radioButton).should('have.css', 'font-size', '16px')
    })
}

describe('First test', () =>{
    beforeEach(()=>{
        //navigate to the ladning page
        cy.visit('https://onboarding.qa.sleepio.com/valmont')
    })
    it('Landing page and click to the Get Started button',() =>{
        //navigate to the get started page
        cy.contains('button',"Get started").should('be.visible').eq(0).click({force: true})
        //ensuring that we are on the correct page
        cy.url().should('include', 'valmont/356#2/1')        
    })
    
    it('Checking the text of the page',() =>{
        cy.contains('button',"Get started").should('be.visible').eq(0).click({force: true})

        //checking question tracker text
        cy.get(questionTracker).should("have.text", "Question 1/9")

        //checking pre question text
        cy.get(questionText).should("have.text", "Over the past month")
        
        //checking question title text
        cy.get(questionTitle).contains("To what extent has sleep troubled you in general?")
    })
 
    it('Checking the lengt of answers and is Continue button is disabled',() =>{
        cy.contains('button',"Get started").should('be.visible').eq(0).click({force: true})

        //checking if there is 5 possible answers 
        cy.get(radioButtons).should("have.length", "5")

        //checking if continue button is disablen when radio button is not selected
        cy.get(continueButton).contains("Continue").should("be.disabled");
    })

    it('Checking text and css of the text inside of radio buttons',() =>{
        cy.contains('button',"Get started").should('be.visible').eq(0).click({force: true})

        //calling up function for checking css style of radio buttons
        checkingCssStyle(radioButtonsText);

        //calling up function if the radio button text is correct
        checkingRadioButtonText(radioButtonsText, 0, 'Not at all')
        checkingRadioButtonText(radioButtonsText, 1, 'A little')
        checkingRadioButtonText(radioButtonsText, 2, 'Somewhat')
        checkingRadioButtonText(radioButtonsText, 3, 'Much')
        checkingRadioButtonText(radioButtonsText, 4, 'Very much')
    })

    it('Checking if radio button is seleted and if Continue button is enabled',()=>{
        cy.contains('button',"Get started").should('be.visible').eq(0).click({force: true})

        //Calling up function for selecting radio button
        for(let i=0; i<5; i++){
            selectOnlyOneRadioButton(radioButtons, i);
        }
        
        //checking if continue buttn is enabled after selecting radio button
        cy.get(continueButton).contains("Continue").should("be.enabled")
    })  
})