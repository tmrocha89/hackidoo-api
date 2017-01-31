'use strict';

var mongoose = require('mongoose');
var Collection = mongoose.model('Collection');

function CollectionRepository() {

    this.save = function(collection, callback) {
        //ToDo: impement
        console.log("[CollectionRepository] save");
        return callback(null, collection);
    }

    this.get = function(collectionId, callback) {
        //ToDo: impement
        console.log("[CollectionRepository] get");
        return callback(null, {});
    }

    this.convertToRecipe = function(collectionDto) {
        //ToDo: impement
        console.log("[CollectionRepository] convertToRecipe");
        return {};
    }

    this.converToDTO = function(collection) {
        console.log("[CollectionRepository] converToDTO");
        //ToDo: impement
        return {};
    };
}

module.exports = CollectionRepository;