$("#currentDay").text(moment().format('dddd, MMMM Do'));
$("#currentHour").text(moment().format('h'));

var currentHour = $("#currentHour")[0].textContent
var timeBlock = ""

console.log(currentHour)

$(".time-block").each(function () {
    timeBlock = $(this)[0].textContent
})

console.log(timeBlock)

function getCurrentHour() {
    var hourNum = str.split(timeBlock);
    console.log = (hourNum)
}

