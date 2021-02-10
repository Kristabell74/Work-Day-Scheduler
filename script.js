var input = document.getElementsByClassName("input-area")
//date and time
var todaysDate = moment();
$("#currentDay").text(todaysDate.format('MMMM Do YYYY, h:mm:ss a'));

//work is the variable the times are objects properties that have been assigned arrays
var work = {
    "8:00 am": [], "9:00 am": [], "10:00 am": [], "11:00 am": [], "12:00 pm": [], "01:00 pm": [], "02:00 pm": [], "03:00 pm": [], "04:00 pm": [], "05:00 pm": []
};

//add work to local storage
var setWork = function () {

    localStorage.setItem("setWork", JSON.stringify(work));

}


// this adds the value of the textarea to the work variable//Do not change it screws with the time
var saveBtn = document.getElementsByClassName("currentText")
console.log("input", input)
localStorage.setItem("work", input.value(work));

console.log(work)

//This tells the computer to save the work when the save button is clicked//Do not delete screws with time
document.getElementById("saveBtn").addEventListener("click", function () {

    //save the current hour and the text area together
    var user = document.getElementById(".current hour", "currentText", Json.stringify(work)).value;
    console.log(currentTime)

    //local storage of the user 
    localStorage.setItem("user", user);

}, false);


//constant value 
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));
//sets the colors for each row based on time
Array.from(rows).forEach(row => {
    let
        rowIdString = row.id,
        rowHour = parseInt(rowIdString)

    if (rowHour) {
        if (currentHour === rowHour) {
            setColor(row, "red");
        }
        else if (currentHour < rowHour) {
            setColor(row, "green");
        }
        else if (currentHour > rowHour) {
            setColor(row, "lightgrey");
        }

    }
});


//gets work from local storage when window opens
var getWork = localStorage.getItem('work'); {

    console.log('work', JSON.parse(retrieveObject));

    window.opener.sessionStorage.setItem('work');
}


//Clear the scedule for the new day at midnight
var clearScheduler = localStorage("work")
function roundMidnight() {
    console.log('at midnight')
    setTimeout(roundMidnight, timeToMidnight());

}


