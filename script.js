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

$(document).ready(function () {
  console.log("Document is ready");

  var hour = moment().format("HH");
  console.log(hour);

  var topDate = moment().format("dddd, MMMM Do");
  $("#currentDay").append(topDate);

  var containerEl = $(".container");

  var arrayOfHours = [09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  for (i = 0; i < arrayOfHours.length; i++) {
    // create row
    var rowEl = $("<div>");
    rowEl.addClass("row time-block");

    // create the column for time
    var timeColEl = $("<div>");
    timeColEl.addClass("col-sm-1 hour");
    rowEl.append(timeColEl);

    // create column for text
    var textEl = $("<textarea>");

    if (arrayOfHours[i] === hour) {
      console.log("Time is present");
      textEl.addClass("col-sm-10 description present");
    } else if (arrayOfHours[i] < hour) {
      textEl.addClass("col-sm-10 description past");
    } else {
      textEl.addClass("col-sm-10 description future");
    }
      rowEl.append(textEl);
    
    // create column for save
    var buttonColEl = $("<button>");
    buttonColEl.addClass("col-1 saveBtn fas fa-save");
    rowEl.append(buttonColEl);

    containerEl.append(rowEl);
  }

  //   }
  // }
});
