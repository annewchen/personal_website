$(function() {
  clearPage();
  $('.about_me').on('click', aboutMe);
  $('.blog').on('click', blogPosts);
  $('.projects').on('click', projects);
  $('.resume').on('click', resume);
});

function clearPage(){
  $("#aboutMePage").hide();
  $("#projects").hide();
  $("#techblogs").hide();
  $("#culturalblogs").hide();
  $("#resumePage").hide();
}

function aboutMe(event){
  event.preventDefault();
  clearPage();
  $('#aboutMePage').show();
};



function blogPosts(event){
  event.preventDefault();
  clearPage();
   $('#techblogs').show();
   $('#culturalblogs').show();
}

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