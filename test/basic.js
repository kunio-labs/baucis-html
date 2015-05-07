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
      expect(dom('form input[type="text"]').length).to.be(1);
      expect(dom('form input[name="field1"]').length).to.be(1);
      expect(dom('form input[name="field1"]').attr('value')).to.be('value1');
      expect(dom('form input[type="submit"]').length).to.be(1);
    });
    
    it('should throw an error for non-object', function() {
      expect(baucisHtml.objToForm).withArgs('foo').to.throwException(/Must pass an object/);
    });
  })
});

