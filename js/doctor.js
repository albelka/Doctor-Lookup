var apiKey = require('./../.env').apiKey;

function Doctor () {
  this.firstNames = [];
  this.lastNames = [];
  this.fullNames = [];
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  var newDoctor = this;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    console.log(JSON.stringify(response.data[0].profile.last_name));
     response.data.forEach(function(data) {
       newDoctor.firstNames.push(data.profile.first_name);
       newDoctor.lastNames.push(data.profile.last_name);
     });

    for(var i=0; i<newDoctor.firstNames.length; i++) {
      newDoctor.fullNames.push(newDoctor.firstNames[i] + " " + newDoctor.lastNames[i] + "<br>");
      var myString = newDoctor.fullNames.join(" ");
      console.log(newDoctor.fullNames[i]);
    }


     $('#solution').html("<h3>These doctors may be able to help you: </h3><br>" + myString);
   })
   .fail(function(error){
      $('#solution').html("<h3>I can't find any doctors for that ailment. What else ails you?<br>");
    });
};



exports.doctorModule = Doctor;
