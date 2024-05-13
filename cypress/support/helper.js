const option =["Please Select", "Employed full-time", "Employed part-time", "Unemployed", "Retired", "Full-time student", "Full-time homemaker or carer"]

class Helper {
    buttonClick(button){
        cy.get('button').contains(button).click()
    }

    SingleSelect(answers, numberOfElements){
        for(let i=0; i< numberOfElements; i++){
            cy.get('[data-testid="question-input-radio-div"] label').eq(i)
            .should('have.css', 'font-size', '16px')
            .and('have.css', 'font-weight', '500')
            .and('have.css', 'color', 'rgb(22, 50, 88)')
            .and('have.text', answers[i])
            .click()
        cy.get('[data-testid="question-input-radio-div"] input').eq(i).should('be.checked')
        cy.get('[data-testid="question-input-radio-div"] input:checked').should('have.length', 1)
        cy.get('.selected').should('have.length', 1)
        }
    }

    DropDownOption(answers, numberOfElements){
        for(let i=0; i< numberOfElements; i++){
            cy.get('[data-testid="select-dropdown"]').find('[role="option"]').eq(i)
            .should('have.css', 'font-size', '16px')
            .and('have.css', 'font-weight', '400')
            .and('have.css', 'color', 'rgb(22, 50, 88)')
            .and('have.text', answers[i])
        }
    }

    DropDownSelect(numberOfElements){
        for(let i=0; i< numberOfElements; i++){
        cy.get('[data-testid="select-dropdown"]').select(i)
        cy.get('[data-testid="select-dropdown"] option:selected').should('have.length', 1)
        }
    }

    MultiSelectCheckbox(answer, numberOfElements){
        for(let i=0; i< numberOfElements; i++){
        // cy.get('.emotion-1si8frp').eq(i).should('have.text', answer[i]).click()
        cy.get('.emotion-1si8frp').contains(answer[i]).click()
        cy.get('[data-testid="question-input-checkbox"]').eq(i).should('be.checked')
        }
    }
    MultiUnselectCheckbox(numberOfElements){
        for(let i=0; i< numberOfElements; i++){
            cy.get('[data-testid="question-input-checkbox"]').eq(i).should('not.be.checked')
            }
    }

    ErrorMessages(month, date, year, errorMessage){
        cy.get("#birth-month").type(month)
        cy.get("#birth-day").type(date)
        cy.get("#birth-year").type(year).blur()
        cy.get('[data-testid="error-message-component"] p').should("have.text", errorMessage)
        cy.contains('Continue').should('be.disabled')
        cy.get("#birth-month").clear()
        cy.get("#birth-day").clear()
        cy.get("#birth-year").clear()
    }

    ValidDateOfBirth(month, date, year){
        cy.get("#birth-month").type(month)
        cy.get("#birth-day").type(date)
        cy.get("#birth-year").type(year).blur()
    }

    OptionEmploymentSelect(numberOfElements){
        for(let i=0; i< numberOfElements; i++){
        cy.get('[data-testid="select-dropdown"]').select(i)
        }
    }
    OptionEmploymentStatus(numberOfElements){
        //let chosenOption = cy.get('[data-testid="select-dropdown"]')
        for(let i=1; i< numberOfElements; i++){
            cy.get('[data-testid="select-dropdown"]').select(i)
                // cy.log(chosenOption)
                if(cy.get('[data-testid="select-dropdown"]').select(i)=== "Employed full-time" || "Employed part-time"){
                    cy.get('button').contains("Continue").click()
                    cy.get('.emotion-nr7joz').should("have.text", "Question 15/20")
                    }

                    else{
                        console.log('test1')
                // else(chosenOption == "Unemployed" || "Retired" || "Full-time student" || "Full-time homemaker or carer");{
                    cy.get('button').contains("Continue").click()
                    cy.get('.emotion-nr7joz').should("have.text", "Question 19/20")
                    }
                    cy.go('back')
                    cy.wait(1000)
                    // cy.get('[data-testid="select-dropdown"]').should('have.text','Employed full-time')
            }
            
            
    }

}

export default Helper