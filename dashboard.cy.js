describe("Dashboard testing", () => {
    let text;
    before(() => {
        cy.visit('https://omni-dev.quloi.com/login')
    })
    it("Login", () => {
        cy.fixture('login').then((value)=>{
            cy.get('#email').click().type(value.email),
            cy.get('#password').click().type(value.password)
        })
        
            cy.get("button[type='submit']").click()

        const textArray = [];

        cy.url().should('eq', 'https://omni-dev.quloi.com/app/buyer/dashboard').then(() => {
            cy.wait(3000)
            cy.get("[class='dashboard-card-middle']>span").each(($row) => {
                // Extract the text content of the element and add it to the array
                cy.wrap($row).invoke('text').then((text) => {
                    textArray.push(text.trim());
                })
            }).then(() => {
                textArray.forEach(total => {
                    cy.log(total);
                })
            })

        });
    })
})
