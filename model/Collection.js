'use strict';

var mongoose = require('mongoose');

var collectionSchema = mongoose.Schema({
    code: String,
    data: Object,
    recipesIds: [{
        type: mongoose.Types.ObjectId,
        ref: 'Recipe'
    }]
});

mongoose.model('Collection', collectionSchema);