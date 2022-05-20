// Current day is displayed at top of the calendar
$(document).ready(function () {
    $('#currentDay').text(moment().format("dddd, MMM Do"))
})

// Color code timeblock by past, present, or future
console.log(moment().hour())

function checkTime() {
    var timeCurrent = moment().hour();
    
   $(".time-block").each(function () {
        var hourBlocker = this.id
        
        if (hourBlocker < timeCurrent) {
            $(this).addClass('past');
            $(this).removeClass('present')
            $(this).removeClass('future')
        }else if (hourBlocker == timeCurrent) {
            $(this).addClass('present')
            $(this).removeClass('past')
            $(this).removeClass('future')
        }else {
            $(this).addClass('future')
            $(this).removeClass('past');
            $(this).removeClass('present')
        }
        console.log(this.id)
    })
}
checkTime();

// Clicking on timeblock will allow user to enter text
// Save button will save into localStorage
$('.container').on('click', function(event) {
    if(event.target.id == 'saveIt') {
        
        var eventSaved = event.target.previousElementSibling.value
        var hour = event.target.previousElementSibling.id

        localStorage.setItem(hour, eventSaved)
    }
})

// Saved events will show up on page when refreshed
$('#9AM').val(localStorage.getItem('9AM'))
$('#10AM').val(localStorage.getItem('10AM'))
$('#11AM').val(localStorage.getItem('11AM'))
$('#12PM').val(localStorage.getItem('12PM'))
$('#1PM').val(localStorage.getItem('1PM'))
$('#2PM').val(localStorage.getItem('2PM'))
$('#3PM').val(localStorage.getItem('3PM'))
$('#4PM').val(localStorage.getItem('4PM'))
$('#5PM').val(localStorage.getItem('5PM'))