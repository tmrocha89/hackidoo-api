'use strict';

var mongoose = require('mongoose');

var collectionSchema = mongoose.Schema({
    code: String,
    data: Object
});

mongoose.model('Collection', collectionSchema);