
$(document).ready(function () {
  console.log("Document is ready");

  var hourDay = moment().format("HH");
  console.log(hourDay);

  var topDate = moment().format("dddd, MMMM Do");
  $("#currentDay").append(topDate);

  var containerEl = $(".container");

  var arrayOfHours = [09, 10, 11, 12, 13, 14, 15, 16, 17];

//   Loop through arrayOfHours and add rows and columns.
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
    } else if (arrayOfHours[i] === 12) {
      var noonHour = "12PM";
      timeColEl.append(noonHour);
    } else {
      var pmHours = parseInt(arrayOfHours[i]) - 12 + "PM";
      timeColEl.append(pmHours);
    }
    rowEl.append(timeColEl);

    // create column for text
    var textEl = $("<textarea>");
    textEl.attr("id", "hour" + arrayOfHours[i]);

    // insert if statement for hours to match with assigned class to change colors
    if (arrayOfHours[i] > hourDay) {
      textEl.addClass("col-sm-10 description future");
    } else if (arrayOfHours[i] < hourDay) {
      textEl.addClass("col-sm-10 description past");
    } else {
      textEl.addClass("col-sm-10 description present");
    }
    rowEl.append(textEl);

    // create column for save
    var buttonColEl = $("<button>");
    buttonColEl.addClass("col-1 saveBtn fas fa-save");
    rowEl.append(buttonColEl);

    containerEl.append(rowEl);
    buttonColEl.on("click", saveEvent);
    console.log("you clicked a button");
  }
// Save text area to local storage after button click.
  function saveEvent(event) {
    event.preventDefault();
    var hour = $(this).siblings(".hour").text();
    var userEntry = $(this).siblings(".description").val();
    localStorage.setItem(hour, userEntry);

  }

// Retrieve from local storage by correct hour.
  $("#hour9").val(localStorage.getItem("9AM"));
  $("#hour10").val(localStorage.getItem("10AM"));
  $("#hour11").val(localStorage.getItem("11AM"));
  $("#hour12").val(localStorage.getItem("12PM"));
  $("#hour13").val(localStorage.getItem("1PM"));
  $("#hour14").val(localStorage.getItem("2PM"));
  $("#hour15").val(localStorage.getItem("3PM"));
  $("#hour16").val(localStorage.getItem("4PM"));
  $("#hour17").val(localStorage.getItem("5PM"));

});
