'use strict';

var CollectionRepository = require('./CollectionRepository.js');
var RecipeRepository = require('./RecipeRepository');

var RepositoryFactory = (function() {
    var self = this;
    this._collectionRepo = new CollectionRepository();
    this._recipeRepo = new RecipeRepository();

    this.getCollectionRepository = function() {
        return self._collectionRepo;
    };

    this.getRecipeRepository = function() {
        return self._recipeRepo;
    };

})();

module.exports = RepositoryFactory;