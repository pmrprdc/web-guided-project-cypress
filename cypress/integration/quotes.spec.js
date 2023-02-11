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
} )


















})