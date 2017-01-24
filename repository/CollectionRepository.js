'use strict';

var mongoose = require('mongoose');
var Collection = mongoose.model('Collection');

function CollectionRepository() {

    this.addCollection = function(collectionObj, callback) {
        var collection = new Collection();
        collection.code = code;
        collection.data = recipeObj;
        return collection.save(function(err) {
            return callback(err, collection);
        });
    };
}

module.exports = CollectionRepository;