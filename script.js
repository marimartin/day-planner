$("#currentDay").text(moment().format('dddd, MMMM Do'));
$("#currentHour").text(moment().format('H'));

var currentHour = $("#currentHour")[0].textContent
console.log("Current Hour:", currentHour)

// Color Coding
$(".time-block").each(function () {
    let timeBlockHour = $(this).attr("id").split("-")[0]

    console.log(timeBlockHour)

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