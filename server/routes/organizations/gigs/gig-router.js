var express = require('express');
var gigRouter = express.Router();
var gigController = require('./gig-controller');

gigRouter.get('/', function(req, res){
  // get all gigs for org depending on params (month, day, week)
  res.send("getting all gigs for org " + req.organization_id);
});

gigRouter.post('/', function(req, res){
  // create new gig for organization
  res.send("creating new gigs for org " + req.organization_id);
});

gigRouter.get('/:gig_id', function(req, res){
  // get gig info
  res.send('getting gig info for ' + req.params.gig_id + " for org " + req.organization_id);
});

gigRouter.post('/:gig_id', function(req, res){
  // update gig info
  res.send('updating gig info for ' + req.params.gig_id + " for org " + req.organization_id);
});

gigRouter.delete('/:gig_id', function(req, res){
  // update gig info
  res.send('deleting gig info for ' + req.params.gig_id + " for org " + req.organization_id);
});

gigRouter.get('/:gig_id/staff', function(req, res){
  // get staff for event
  res.send('getting staff info for ' + req.params.gig_id + " for org " + req.organization_id);
});

gigRouter.post('/:gig_id/staff', function(req, res){
  // update staff for gig
  res.send('updating staff info for ' + req.params.gig_id + " for org " + req.organization_id);
});

gigRouter.get('/:gig_id/staff/:employee_id', function(req, res){
  // get gig status for employee
  res.send('getting gig status for ' + req.params.gig_id + ' gig for employee ' + req.params.employee_id + " for org " + req.organization_id);
});

gigRouter.post('/:gig_id/staff/:employee_id', function(req, res){
  // update gig status for employee
  res.send('updating gig status for ' + req.params.gig_id + ' gig for employee ' + req.params.employee_id + " for org " + req.organization_id);
});

gigRouter.delete('/:gig_id/staff/:employee_id', function(req, res){
  // remove employee from gig
   res.send('removing employee from gig ' + req.params.gig_id + " for org " + req.organization_id);
});

module.exports = gigRouter;