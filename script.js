// Display current date
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Hidden display of current hour
$("#currentHour").text(moment().format('H'));

var currentHour = $("#currentHour")[0].textContent

// Color Coding
$(".time-block").each(function () {
    let timeBlockHour = $(this).attr("id").split("-")[0]

    if (timeBlockHour === currentHour) {
        $(this).addClass("present");
    }

    if (timeBlockHour > currentHour) {
        $(this).addClass("future");
    }

    if (timeBlockHour < currentHour) {
        $(this).addClass("past");
    }
})

var timeBlockContent = $(".saveBtn").siblings(".description").val()

// Save button - Saves to Local Storage
$(".saveBtn").click(function () {
    var userInput = $(this).siblings(".description").val()
    var hour = $(this).parent().attr("id").split("-")[0]

    localStorage.setItem(hour, userInput);

    console.log(localStorage)
});







