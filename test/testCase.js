var expect  = require('chai').expect;
var fetch = require('node-fetch');
describe('Server Status',async function() {
    it('Server Status',async function() {
        let result = await  fetch('http://localhost:3000');
        let result1 = await result.json();
        expect(result1.status).to.be.true;
    });        
});

describe('Server Welcome message',async function() {
    it('Server Welcome message',async function() {
        let result = await  fetch('http://localhost:3000');
        let result1 = await result.json();
        expect(result1.message).to.equal('Welcome to express.');
    });        
});

describe('Scraping API Response',async function(done) {
    it('Scraping API Response Status',async function(done) {
        this.timeout(3000); // A very long environment setup.

        let result = await  fetch('http://localhost:3000/scrap',{
            method: 'post',
            body:    JSON.stringify({"url":"https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"}),
            headers: { 'Content-Type': 'application/json' },
        });
        let result1 = await result.json();
        // console.log(result1)
        expect(result1).to.exist;
        // this.timeout(0)
    });       
});


describe('Server Welcome message',async function() {
    it('Server Welcome message',async function() {
        let result = await  fetch('http://localhost:3000');
        let result1 = await result.json();
        expect(result1.message).to.equal('Welcome to express.');
    });        
});





    expect({}).to.exist;
    expect(26).to.equal(26);
    expect(false).to.be.false;
    expect('hello').to.be.string;

    // Modifiers ('not')
    expect([1, 2, 3]).to.not.be.empty;

    // Complex chains
    expect([1, 2, 3]).to.have.length.of.at.least(3);