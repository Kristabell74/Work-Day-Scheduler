//date and time
var todaysDate = moment();
$("#currentDay").text(todaysDate.format('MMMM Do YYYY, h:mm:ss a'));

console.log("todays date")

//objects to sore the work locally
var work = {
    "8": [], "9": [], "10": [], "11": [], "12": [], "01": [], "02": [], "03": [], "04": [], "05": []
};

//add work to local storage
var setWork = function () {

    localStorage.setItem('work', JSON.stringify(work));
}

//get work from local storage
var getWork = function () {
    console.log('getWork')
    var fullWork = JSON.parse; (localStorage.getItem('work'));
    if (fullWork) {
        work = fullWork


        //for each row keep the value entered
        $.each(work, function (hour, work) {
            console.log('work')
            var hourDiv = $()
            createWork(work, hourDiv);
        })
        //check the times
        auditWork()

    }
}

//put  and keep work in the correct hour
var createWork = function (workText, hourDiv) {

    var workDiv = workDiv.find('.task');
    var workP = $('<p>')
        .addClass('description')
        .text(workText)
    workDiv.html(workP);

}

//update background of each row depending on time
var auditWork = function () {
console.log ("auditWork")
    var curentHour = moment().hour();
    $('.work-info').each(function () {
        var elementHour = parseInt($(this).attr('id'));

        //keeps the color greyed-out "its all in the past baby"
        if (elementHour < currentHour) {
            $(this).removeClass(['present', 'future']).addClass('past');
        }
        //keeps the color red for "stop"
        else if (elementHour === currentHour) {
            $(this).removeClass()(['past', 'future']).addClass('present');
        }
        //keeps the color Green for "go"
        else {
            $(this).removeClass(['past', 'present']).addClass('future');
        }
    })
};





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
