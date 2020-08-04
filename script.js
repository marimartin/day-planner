// Display current date
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Update current hour every minute 
var currentHour = moment().hour();

function updateTime() {
    $("#currentHour").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
};

setTimeBlock();
updateTime();
setInterval(function () {
    updateTime();
    setTimeBlock();
}, 60000);

// Color Coding and Display User Input
function setTimeBlock() {
    $(".time-block").each(function () {
        var timeBlockID = $(this).attr("id")
        var displayedText = localStorage.getItem(timeBlockID);

        $(this).children("textarea").val(displayedText)

        let timeBlockHour = $(this).attr("id").split("-")[0]

        if (timeBlockHour == currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }

        if (timeBlockHour > currentHour) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }

        if (timeBlockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
    })
}

// Save button - Saves to Local Storage
var timeBlockContent = $(".saveBtn").siblings(".description").val()

$(".saveBtn").click(function () {
    event.preventDefault();
    var userInput = $(this).siblings(".description").val()
    var key = $(this).parent().attr("id")

    localStorage.setItem(key, userInput);

    console.log(localStorage)
});



















