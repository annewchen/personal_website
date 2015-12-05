$(function() {
  clearPage();
  $('.about_me').on('click', aboutMe);
  $('.projects').on('click', projects);
  $('.resume').on('click', resume);
});

function clearPage(){
  $("#aboutMePage").hide();
  $("#projects").hide();
  $("#resumePage").hide();
}

function aboutMe(event){
  event.preventDefault();
  clearPage();
  $('#aboutMePage').show();
};


function projects(event){
  event.preventDefault();
  clearPage();
  $('#projects').show();
}

function resume(event){
  event.preventDefault();
  clearPage();
  $("#resumePage").show();
}