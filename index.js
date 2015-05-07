// __Dependencies__
var es = require('event-stream');

// __Module Definition__
var plugin = module.exports = function () {
  var baucis = this;
}

plugin.objToForm = function(obj) {
  if (!obj) return '';

  if (typeof obj !== 'object') throw 'Must pass an object';

  var keys = Object.keys(obj);
  if (keys.length == 0) return '';

  var chunks = keys.map(function(key) {
    switch(typeof obj[key]) {
      case 'string':
        return '<input name="'+key+'" type="text" value="'+obj[key]+'"/>';
        break;
      case 'number':
        return '<input name="'+key+'" type="text" value="'+obj[key]+'"/>';
        break;
      case 'boolean':
        return '<input name="'+key+'" type="checkbox" value="'+key+'"'+(obj[key]?' checked="checked"':'')+'/>';
        break;
      case 'undefined':
        return '<input name="'+key+'" type="text" value=""/>';
        break;
      case 'object':
        // TODO: recurse
        break;
      default:
        throw 'Unknown value type';
    }
  });

  chunks.unshift('<form>');
  chunks.push('<input type="submit" />');
  chunks.push('</form>');

  return chunks.join();
};


