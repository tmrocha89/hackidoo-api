'use strict';

var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');

function RecipeRepository() {

    this.save = function(recipe, callback) {
        //ToDo: impement
        console.log("[RecipeRepository] save");
        return callback(null, recipe);
    }

    this.get = function(recipeId, callback) {
        //ToDo: impement
        console.log("[RecipeRepository] get");
        return callback(null, {});
    }

    this.convertToRecipe = function(recipeDto) {
        //ToDo: impement
        console.log("[RecipeRepository] convertToRecipe");
        return {};
    }

    this.converToDTO = function(recipe) {
        console.log("[RecipeRepository] converToDTO");
        //ToDo: impement
        return {};
    };
}

module.exports = RecipeRepository;