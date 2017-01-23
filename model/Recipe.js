'use strict';

var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
    code: String,
    data: Object
});

mongoose.model('Recipe', recipeSchema);