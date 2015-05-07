var expect = require('expect.js');
var cheerio = require('cheerio');
var fs = require('fs');
var join = require('path').join;
var customer = join(__dirname, 'fixtures', 'customer.json');
var customers = join(__dirname, 'fixtures', 'customers.json');
var baucisHtml = require('../');

describe('baucis-html', function() {
  describe('#objToForm', function() {
    it('should return an empty string for no object', function() {
      expect(
        baucisHtml.objToForm()
      ).to.be.empty();
    });
    
    it('should return an empty string when the object is empty', function() {
      expect(
        baucisHtml.objToForm({})
      ).to.be.empty();
    });
    
    it('should return one form for a non-array object', function() {
      var dom = cheerio.load(
        baucisHtml.objToForm({ field1: 'value1' })
      );
      
      expect(dom('form').length).to.be(1);
    });
    
    it('should throw an error for an array containing non-objects', function() {
    });
    
    it('should return multiple forms for an array containing objects', function() {
    });
  })
});

