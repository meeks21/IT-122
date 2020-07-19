'use strict';
const expect = require("chai").expect;
const guitars = require('../data');



describe('test data methods', ()=>{
  
// Testing the addItem method
    it('should add an item to the array', ()=> {
        const addItem = guitars.addGuitar({brand : 'Fender', model : 'Jazzmaster', color : 'Navy Blue Metallic', year : 1976 });
        console.log(addItem)
        expect(addItem.added).to.be.true;
    });

    it('should not add an item to the array', ()=> {
        const addItem = guitars.addGuitar({model : 'Jaguar'});
        console.log(addItem)
        expect(addItem.added).to.be.false;
    });



// Testing the getItem method
    it('should return an exisiting data item', ()=> {
        const testGetItem = guitars.getGuitar("Telecaster");

        expect(testGetItem).to.deep.equal({brand : 'Fender', model : 'Telecaster', color : 'Vintage Natural', year : 1972 });
    });

    it('should fail with an invalid guitar model', ()=> {
        const testGetItem = guitars.getGuitar("Honda");

        expect(testGetItem).to.be.undefined;
    });



// Testing the deleteItem method
    it('It should delete an existing guitar', () => {
        const result = guitars.delGuitar("Stratocaster");
        console.log(result);
        expect(result.deleted).to.be.true;
    });

    it('It should delete an existing guitar', () =>{
        const result = guitars.delGuitar("Honda");
        console.log(result);

        expect(result.deleted).to.be.false;
        
    });

});
