// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    // a. momentsjs connection

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
    // This is our HTML lineup

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
    // Javascript to style these blocks
    // And momentsjs connection again to compare time
    // Each block associated with a time

// WHEN I click into a time block
// THEN I can enter an event
    // HTML element is a field

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
    // .on submit

// WHEN I refresh the page
// THEN the saved events persist
    // populate screen from DOM storage
    // event preventDefault

$(document).ready(function() {
    console.log("Document is ready");
})
checkTime();

// var arrayOfHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

for (i = 9; i < 18; i++) {
  var hourEl = "#hr-" + i;
  if (i === moment().hour()) {
      $(hourEl).addClass(".present");
  } else if (i < moment().hour()) {
    $(hourEl).addClass(".past");
  } else {
      $(hourEl).addClass(".future");
  }
}

function checkTime () {
    moment().hour();
}