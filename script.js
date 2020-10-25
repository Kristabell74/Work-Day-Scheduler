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
    console.log('getWork')
    var fullWork = JSON.parse; (localStorage.getItem('work'));
    if (fullWork) {
        work = fullWork

        console.log("getWork")

        //for each row keep the value entered
        $.each(work, (hour, work) => {
            var hourDiv = $();
            console.log("hourDiv");
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
    var curentHour = moment().hour();
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
};

//local storage for when text is entered on the calendar

// var replaceTextarea = function (textareaElement) {

//     //Pulls the elements in order to put time and notations together
//     var workInfo = textareaElement.closest(".work-info");
//     var textArea = workInfo.find('textarea');

//     //get the time and notations together
//     var time = workInfo.attr('');
//     var work = textArea.vail().trim();

//     //stores the data in the system
//     work[time] = [text];
//     setWork();

//     //replace the textarea element with a p 
//     createWork(work, workInfo);
// }





//load tasks from local storage and create tasks in row

// //create a task for each key/value pair
//make sure the past current and future time is reflected in color

//make a task for each row that goes with each hour



//update the background of each row based on the time

//create local storage


// Put the object into storage


// Retrieve the object from storage




//click handelrs

//button

//update backgrounds 
