var input = document.getElementsByClassName("input-group")
//date and time
var todaysDate = moment();
$("#currentDay").text(todaysDate.format('MMMM Do YYYY, h:mm:ss a'));

//work is the variable the times are objects properties that have been assigned arrays
var work = {
    "8:00 am": [], "9:00 am": [], "10:00 am": [], "11:00 am": [], "12:00 pm": [], "01:00 pm": [], "02:00 pm": [], "03:00 pm": [], "04:00 pm": [], "05:00 pm": []
};

// var currentHour = document.querySelector("#currentHour");
var currentText = document.querySelector("#currrentText");

//add work to local storage
var setWork = function getElementById(work) {

    localStorage.setItem("setWork", JSON.stringify());

}


// this adds the value of the textarea to the work variable//Do not change it screws with the time
var saveBtn = document.getElementsById(work);

console.log(currentText, currentHour)
localStorage.setItem("work", input.value(work));

console.log(work)

//This tells the computer to save the work when the save button is clicked//Do not delete screws with time
document.getElementById("saveBtn").addEventListener("click", function () {

    //save the current hour and the text area together
    var user = document.getElementById("currentHour", "currentText", Json.stringify(work)).value;
    console.log(currentHour)

    //local storage of the user 
    localStorage.setItem("user", user);

}, false);

// When text is submitted...
currentTextlist.addEventListener("click", function (event) {
    event.preventDefault();

    var currentText = currentTextInput.value.trim();

    // Return from function early if submitted Text is blank
    if (currentText === "") {
        return;
    }

    // Add new Text to text array, clear the input
    curentText.push(currentText);
    currentTextInput.value = "";

    // Re-render the list
    rendercurrentText();
});


//constant value 
const container4 = document.getElementsByClass("work");
let currentHour = parseInt(moment().format('H'));
//sets the colors for each row based on time
Array.from(container4).forEach(container4 => {
    let
        container4IdString = container4.id,
        container4Hour = parseInt(container4IdString)

    if (container4Hour) {
        if (currentHour === container4Hour) {
            setColor(container4, "red");
        }
        else if (currentHour < container4Hour) {
            setColor(container4, "green");
        }
        else if (container4Hour > container4Hour) {
            setColor(contaner4, "lightgrey");
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
    console.log('roundmidnight')
    setTimeout(roundMidnight, timeToMidnight());

}


