var input = document.getElementsByClassName("input-group")
//date and time
var todaysDate = moment();
$("#currentDay").text(todaysDate.format('MMMM Do YYYY, h:mm:ss a'));

//work is the variable the times are objects properties that have been assigned arrays
var work = {
    "08:00 am": "", "09:00 am": "", "10:00 am": "", "11:00 am": "", "12:00 pm": "", "01:00 pm": "", "02:00 pm": "", "03:00 pm": "", "04:00 pm": "", "05:00 pm": ""
};


//add work to local storage
var setWork = function getElementById() {

    localStorage.setItem("setWork", JSON.stringify(work));

}

//This tells the computer to save the work when the save button is clicked//Do not delete screws with time

var btns = document.querySelectorAll(".col-1");
for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener("click", handleclick);
}

function handleclick(e) {
    //save the current hour and the text area together
    let btn = e.target.closest(".col-1");
    let textarea = btn.previousElementSibling;
    let text = textarea.value;
    let span = textarea.previousElementSibling;
    let hour = span.textContent;

    work[hour] = text;
    //local storage of the user 

    localStorage.setItem("work", JSON.stringify(work));

}


// //constant value 
// const container4 = document.getElementsByClass("work");
// let currentHour = parseInt(moment().format('H'));
// //sets the colors for each row based on time
// Array.from(container4).forEach(container4 => {
//     let
//         container4IdString = container4.id,
//         container4Hour = parseInt(container4IdString)

//     if (container4Hour) {
//         if (currentHour === container4Hour) {
//             setColor(container4, "red");
//         }
//         else if (currentHour < container4Hour) {
//             setColor(container4, "green");
//         }
//         else if (container4Hour > container4Hour) {
//             setColor(contaner4, "lightgrey");
//         }

//     }
// });

// //gets work from local storage when window opens
// var getWork = localStorage.getItem('work'); {

//     console.log('work', JSON.parse(retrieveObject));

//     window.opener.sessionStorage.setItem('work');
// }


// //Clear the scedule for the new day at midnight
// var clearScheduler = localStorage("work")
// function roundMidnight() {
//     console.log('roundmidnight')
//     setTimeout(roundMidnight, timeToMidnight());

// }


