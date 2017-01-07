var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#look-up').submit(function(event){
    event.preventDefault();
    var medicalIssue = $('#ailment').val();
    var newDoctor = new Doctor();
    newDoctor.getDoctors(medicalIssue);
  });
});
