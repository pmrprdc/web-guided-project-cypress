


describe("Quotes App", ()=>{

    beforeEach(()=>{
        cy.visit("http://localhost:1234");
    })

//Helpers


const textInput = () => cy.get("input[name=text]");
const authorInput = () => cy.get("input[name=author]");
const foobarInput = () => cy.get("input[name=foobar]");
const submitBtn = () => cy.get(`button[id="submitBtn"]`)
const cancelBtn = () => cy.get(`button[id="cancelBtn"]`)



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


describe("Filling out the inputs and cancelling", ()=>{
    it("can navigate to the site", ()=> {
        
        cy.url().should("include", "localhost");


    })
    it("submit button starts out disabled", ()=>{
        submitBtn().should("be.disabled");
    })

    it("can type in the inputs", ()=>{
        textInput().should("have.value", "")
        .type("CSS rulez")
        .should("have.value","CSS rulez")



        authorInput().should("have.value", "")
    })


    it("the submit button eneables when both inputs are filled out", ()=>{

        authorInput().type("Casey")
        textInput().type("This is fun!")
        submitBtn().should("not.be.disabled")

    })

    it("the cancel button can reset the inputs and disable the submit button", ()=>{
        authorInput().type("Casey");
        textInput().type("FUN");
        cancelBtn().click();
        textInput().should("have.value", "");
        authorInput().should("have.value", "");
        submitBtn().should("be.disabled");
        
    })


    

})

describe("Adding a new quote", ()=> {
    it("can submit and delete a new quote", ()=>{

        textInput().type("STICKER BANKSY")
        authorInput().type("Author > Exit Through The Gift Shop")
        submitBtn().click();


        cy.contains("STICKER BANKSY").siblings("button:nth-of-type(2)").click();
        cy.contains("STRICKER BANKSY").should("not.exist")
    })
    it("variation of can submit a new quote", ()=>{
    
        cy.contains("CSS  rulez").should("not.exist");
        textInput().type('CSS rulez')
        authorInput().type("Casey")
        submitBtn().click();
        cy.contains('CSS rulez');
        cy.contains("Casey");
        cy.contains('CSS rulez').next().next().click();
        cy.contains("CSS rulez").should("not.exist")
    })
})





describe("Editing an existing quote", ()=>{

    it("can edit a quote", ()=> {
        textInput().type("Lorem ipsum");
        authorInput().type("CRHarding");
        submitBtn().click();
        cy.contains("Lorem ipsum").siblings("button:nth-of-type(1)").click()
  
        textInput().should("have.value", "Lorem ipsum");
        authorInput().should("have.value", "CRHarding");
        textInput().type(" dolor sit");
        authorInput().type(" ROCKS!");
        submitBtn().click();
        cy.contains("Lorem ipsum dolor sit (CRHarding ROCKS!)")
  
  
  
  
  
  
  
    })
})




})