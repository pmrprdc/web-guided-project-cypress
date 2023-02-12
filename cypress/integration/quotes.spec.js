// write tests here
describe("Quotes App", ()=>{

    beforeEach(()=>{
        cy.visit("http://localhost:1234");
    })

//Helpers


const textInput = () => cy.get("input[name=text]");
const authorInput = () => cy.get("input[name=author]");
const foobarInput = () => cy.get("input[name=foobar]");
const submitBtn = () => cy.get(`button[id=submitBtn"]`)



it("Sanity check to make sure tests work", ()=> {



    expect(1+2).to.equal(3);
    expect(2+2).to.equal(4);
    expect({}).not.to.equal({});
    
} )





it("THE PROPPER ELEMENTS ARE SHOWING!", ()=>{


    textInput().should("exist")
    authorInput().should("exist");
    foobarInput().should("not.exist")
    cy.contains("Submit Quote").should("exist")
    cy.contains(/submit quote/i).should("exist")
})












})