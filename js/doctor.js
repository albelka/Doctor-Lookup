var apiKey = require('./../.env').apiKey;

function Doctor () {
  this.doctorNames = [];
  this.doctorPractices = [];
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  var newDoctor = this;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
     var docs =response.data;
     var i;
     var prac = {};
     var doctorName;
     for(i=0; i < docs.length; i++) {
       var objectInResponse = docs[i];
       newDoctor.doctorPractices.push(objectInResponse.practices);
       console.log(JSON.stringify(newDoctor.doctorPractices));
     }
     for(i=0; i < newDoctor.doctorPractices.length; i++) {
       console.log(newDoctor.doctorPractices.length);
       newDoctor.doctorNames.push(newDoctor.doctorPractices[i].name);
       console.log(JSON.stringify(newDoctor.doctorNames));
     }
     $('#solution').append("<li>" + newDoctor.doctorNames + "</li>");

   })
   .fail(function(error){
      console.log("fail");
    });
};



exports.doctorModule = Doctor;
