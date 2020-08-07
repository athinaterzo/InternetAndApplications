'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var trialSchema = new Schema({
  nct_id: String,
  brief_title: String,
  brief_summary: String,
  criteria: String,
  condition: [{cond_name: String}],
  intervention:[{intervention_type:String, intervention_name: String}]
});

module.exports = mongoose.model('trial', trialSchema, 'trialData');