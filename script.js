//date and time
var todaysDate = moment();
$("#currentDay").text(todaysDate.format('MMMM Do YYYY, h:mm:ss a'));

console.log("todays date")

//objects with variables to put data in order to sort the work locally
var work = {
    "8:00 am": [], "9:00 am": [], "10:00 am": [], "11:00 am": [], "12:00 pm": [], "01:00 pm": [], "02:00 pm": [], "03:00 pm": [], "04:00 pm": [], "05:00 pm": []
};

//add work to local storage
var setWork = function () {

    localStorage.setItem('work', JSON.stringify(work));
}

//persist the data to local storage
var getWork = function () {

    var fullWork = JSON.parse; (localStorage.getItem('work'));
    if (fullWork) {
        work = fullWork

        console.log("getWork")

        //for each row keep the value entered
        $.each(work, (_hour, work) => {
            var hourDiv = $();

            createWork(work, hourDiv);
        })

        //check the times
        auditWork()

    }
}

//put  and keep work in the correct hour
var createWork = function (workText, hourDiv) {

    var workDiv = hourDiv.find('.work');
    var workP = $('<p>')
        .addClass('description')
        .text(workText)
    workDiv.html(workP);

}

//update background  color of each row depending on time
var auditWork = function () {
    console.log("auditWork")
    var currentHour = moment().hour();
    $('.work-info').each(function () {
        var elementHour = parseInt($(this).attr(''));

        //keeps the color greyed-out - "its all in the past baby"
        if (elementHour < currentHour) {
            $(this).removeClass(['present', 'future']).addClass('past');
        }
        //keeps the color - red for "stop"
        else if (elementHour === currentHour) {
            $(this).removeClass()(['past', 'future']).addClass('present');
        }
        //keeps the color - Green for "go"
        else {
            $(this).removeClass(['past', 'present']).addClass('future');

            console.log("elementHour: ", elementHour)
        }
    })
}



