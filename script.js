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

  var hourDay = moment().format("HH");
  console.log(hourDay);

  var topDate = moment().format("dddd, MMMM Do");
  $("#currentDay").append(topDate);

  var containerEl = $(".container");

  var arrayOfHours = [09, 10, 11, 12, 13, 14, 15, 16, 17];


  
  for (i = 0; i < arrayOfHours.length; i++) {
    // create row
    var rowEl = $("<div>");
    rowEl.addClass("row time-block");

    // create the column for time
    var timeColEl = $("<div>");
    timeColEl.addClass("col-sm-1 hour");
    if (arrayOfHours[i] < 12) {
        var amHours = arrayOfHours[i] + "AM";
        timeColEl.append(amHours);
    } else if 
        (arrayOfHours[i] === 12) {
            var noonHour = "12PM"
            timeColEl.append(noonHour);
        
    
    } else {
        var pmHours = parseInt(arrayOfHours[i]) - 12 + "PM";
        timeColEl.append(pmHours);
    }
    rowEl.append(timeColEl);

    // create column for text
    var textEl = $("<textarea>");
    textEl.attr("id", "hour" + arrayOfHours[i]);

    if (arrayOfHours[i] === hourDay) {
      console.log("Time is present");
      textEl.addClass("col-sm-10 description present");
    } else if (arrayOfHours[i] < hourDay) {
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
    buttonColEl.on("click", saveEvent);
    console.log("you clicked a button");

// assign textContent to what?
// append textContent to textEl?

    

    }
  

  function saveEvent(event) {
    event.preventDefault();
    console.log($(this).siblings(".hour").text());
    console.log($(this).siblings(".description").val());
    var hour = ($(this).siblings(".hour").text());
    var userEntry = ($(this).siblings(".description").val());
  localStorage.setItem(hour, userEntry);

//   var enteredEvents = getEvents();
//   //save the event to storage
//   localStorage.setItem("events", JSON.stringify(enteredEvents));
  }

  function getEvents() {
    var workdayEvents = JSON.parse(localStorage.getItem("events"));
    return workdayEvents;
  }

  getEvents();

  $("#hour9").val(localStorage.getItem("9AM"));

  
});
