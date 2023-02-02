// declaring some variables linking to html and dayjs

var timeDisplayEl = $("#time-display");
var savedEvent = $(".btn");
var curHr = dayjs().hour();

// function to set the input value by the user in the text area to local storage

function saved() {
  var eventInput = $(this).siblings("textarea");
  var timeBlock = $(this).parent().attr("id");
  localStorage.setItem(timeBlock, eventInput.val());
}

// for loop to determine if it is past present or future

for (let i = 0; i < 24; i++) {
  var hour = $("#hr-" + i);

  if (i < curHr) {
    hour.addClass("past");
  }

  if (i == curHr) {
    hour.addClass("present");
  }

  if (i > curHr) {
    hour.addClass("future");
  }

  // this links the index in our for loop to local storage

  var eventInput = localStorage.getItem("hr-" + i);
  hour.children("textarea").val(eventInput);
}

// Add a function to display time using dayjs

function displayTime() {
  var rightNow = dayjs().format("MMM DD, YYYY [at] HH:mm:ss a");
  timeDisplayEl.text(rightNow);
}

// call our functions

displayTime();
setInterval(displayTime, 1000);
savedEvent.on("click", saved);
