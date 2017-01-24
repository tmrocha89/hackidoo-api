'use strict';

var assert = require('assert');
//ToDo
describe('describe', function() {
    it('should return an array', function() {
        assert(Array.isArray('a,b,c'.split(',')));
    });
});