// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeDisplayEl = $('#time-display');
var savedEvent = $('.btn');
var curHr = dayjs().hour();


const savedEvents = document.getElementsByClassName("btn saveBtn")



function saved(){
  var eventInput = $(this).siblings('textarea');
  var timeBlock = $(this).parent().attr('id');
  localStorage.setItem(timeBlock, eventInput.val());
}

// function saveProjectsToStorage(projects) {
//   localStorage.setItem('projects', JSON.stringify(projects));
//  }

// var eventInput = localStorage.getItem('hr-' + i);
// hour.children('textarea').val(eventInput);

// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?


// // addEventListener("click",);
// // console.log('button clicky')



// //  addEvent(btn, 'click', function (event) {
// //   console.log('Button Clicked');
// });



  //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?

for (let i = 0; i < 24; i++) {
  var hour = $('#hr-' + i)
  
  if (i < curHr) {
    hour.addClass('past')
  }

if (i == curHr) {
  hour.addClass('present')
}

if (i > curHr) {
  hour.addClass('future')
}



var eventInput = localStorage.getItem('hr-' + i);
hour.children('textarea').val(eventInput);

}

//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?

//   // Reads projects from local storage and returns array of project objects.
// // Returns an empty array ([]) if there aren't any projects.
// // function readProjectsFromStorage() {
// //   var projects = localStorage.getItem('projects');
// //   if (projects) {
// //     projects = JSON.parse(projects);
// //   } else {
// //     projects = [];
// //   }
// //   return projects;
// // }
//   //  return projects;
// }

// // // Takes an array of projects and saves them in localStorage.
// // function saveProjectsToStorage(projects) {
// //   localStorage.setItem('projects', JSON.stringify(projects));
// // }

// // // Gets project data from local storage and displays it
// // function printProjectData() {
// //   // clear current projects on the page
// //   projectDisplayEl.empty();

// //   // get projects from localStorage
// //   var projects = readProjectsFromStorage();

// //   // loop through each project and create a row
// //   for (var i = 0; i < projects.length; i += 1) {
// //     var project = projects[i];
// //     var projectDate = dayjs(project.date);
// //     // get date/time for start of today
// //     var today = dayjs().startOf('day');

// //     // Create row and columns for project
// //     var rowEl = $('<tr>');
// //     var nameEL = $('<td>').text(project.name);
// //     var typeEl = $('<td>').text(project.type);
// //     var dateEl = $('<td>').text(projectDate.format('MM/DD/YYYY'));
//   // TODO: Add code to display the current date in the header of the page.
// );

function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] HH:mm:ss a');
  timeDisplayEl.text(rightNow);
}



displayTime();
setInterval(displayTime, 1000);
savedEvent.on('click', saved);

// dayjs().hour() // gets current hour
// newDate = dayjs().hour(12) // returns new dayjs object

// As with the other getters for durations, dayjs.duration().hours() gets the hours (0 - 23).

// dayjs.duration().asHours() gets the length of the duration in hours.