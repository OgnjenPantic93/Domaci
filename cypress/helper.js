class Helper {
    buttonClick(){
        cy.get('button').contains("Continue").click()
    }

    singleSelect(answers, numberOfElements){
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
        cy.get('.emotion-1si8frp').eq(i).should('have.text', answer[i]).click()
        cy.get('[data-testid="question-input-checkbox"]').eq(i).should('be.checked')
        }
    }
    MultiUnselectCheckbox(numberOfElements){
        for(let i=0; i< numberOfElements; i++){
            cy.get('[data-testid="question-input-checkbox"]').eq(i).should('not.be.checked')
            }
    }
    
}

export default Helper