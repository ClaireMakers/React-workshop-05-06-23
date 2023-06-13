// There should be a button on the page called "Random User"
// When clicked, this button should send a fetch request to the random user API
// It should also update the word in my react hook
// The component should then re-render

import App from "./App"

describe("App.js", () => {
    it("the random button should allow us to set the word displayed on the page to the return value of a fetch request to the random user API", () => {
        cy.mount(<App />);

        let data = { results: [{ name: { first: "LEA" } }] };

        //Intercepting the get request and mocking the response value
        cy.intercept("GET", "https://randomuser.me/api", (req) => {
            req.reply({
                statusCode: 200,
                body: data
            });
        }).as("getUser");

        //need to think what to label my  button so cypress can find it
        cy.get('[data-cy="random-button"]').click();

        //"wait" for request to resolve, and then check that the page has changed appropriately
        cy.wait("@getUser").then(() => {
            cy.get('[data-cy="cheerButton"]')
                .should('contain.text', "L")
                .and('contain.text', "E")
                .and('contain.text', "A")
        })
    })
})


