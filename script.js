
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
var saveBtn = getElementById(".currentText")

localStorage.setItem("work", input.value());


//This tells the computer to save the work when the save button is clicked
document.getElementById("work").addEventListener("click", function () {

    //save the current hour and the text area together
    var user = document.getElementById(".current hour", ".currentText", Json.stringify(work)).value;
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
        else {
            setColor(currentHour, "clear");
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








// //when click the save button


//     //this is keeping information with the time at the click of the button if it has changed
//
//         //this is the click feature for the button 
//  

//         //click the button to save any input

// //save button click it in order to save information



//     //keep track of time 
//     //when time is past change the hour on calendar that is on the hour and in the future

//     //get the current work and the future work and calendar all 





