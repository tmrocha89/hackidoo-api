'use strict';

var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');

function RecipeRepository() {

    this.addRecipe = function(code, recipeObj, callback) {
        var recipe = new Recipe();
        recipe.code = code;
        recipe.data = recipeObj;
        return recipe.save(function(err) {
            return callback(err, recipe);
        });
    };
}

module.exports = RecipeRepository;