/*
miniQuery.js
Created on 6/5/16 by TSPrograms.
Copyright © 2016 TSPrograms.
*/

(function(global){
  var doc = global.document;
  var miniQuery = function(selector) {
    return doc.querySelectorAll(selector);
  }.bind(doc);
  global.EventTarget.prototype.on = function(event, callback, selector) {
    if (typeof selector === 'undefined') {
      this.addEventListener(event, callback);
    }
    else {
      this.addEventListener(event, function(e) {
        var matches = (this === global ? doc : this).querySelectorAll(selector);
        if ([].indexOf.call(matches, e.target) !== -1) {
          callback.call(e.target, e);
        }
      });
    }
    return this; // For chaining
  };
  
  global.$ = global.miniQuery = miniQuery;
})(window);
