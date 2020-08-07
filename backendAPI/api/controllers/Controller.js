'use strict';


var mongoose = require('mongoose'),
  Trial = mongoose.model('trial');

exports.getTrial = function(req, res) {
  
  Trial.find({'nct_id':req.params.id},function(err, trial) {
    if (err)
      res.send(err);
    res.json(trial);
  });
};


exports.getInfo = function(req, res) {
  Trial.find({'intervention.intervention_name':{ $regex: ".*"+req.params.drug+".*", $options: 'i' },'condition.cond_name':{ $regex: ".*"+req.params.condition+".*", $options: 'i'  }},'nct_id brief_summary criteria',function(err, trial) {
    var result = []
    for(var i of trial){
      var dict = {}
      dict['nct_id']           = i.nct_id;
      dict["elegCheckDrug"]    = i.criteria.match(new RegExp(req.params.drug, "ig"))!==null;
      dict["elegCheckCond"]    = i.criteria.match(new RegExp(req.params.condition, "ig"))!==null;
      dict['summaryCheckDrug'] = i.brief_summary.match(new RegExp(req.params.drug, "ig"))!==null;
      dict['summaryCheckCond'] = i.brief_summary.match(new RegExp(req.params.condition, "ig"))!==null; 
      result.push(dict)
      //console.log(i)
    }
    
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.getDiseases = function(req, res) {
  console.log("get", req.params.condition)
  Trial.find({'condition.cond_name': { $regex: ".*"+req.params.condition+".*", $options: 'i'  }},'condition',function(err, trial) {
    if (err)
      res.send(err);

    res.json(trial);
  });
};