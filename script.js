var getWork = localStorage.getItem('work');
var input = document.getElementsByClassName("input-group")
//date and time
var todaysDate = moment();

var hour = todaysDate.hour();
if (hour < 12) {
    hour = "am" + hour;
} else if (hour > 12) {
    hour = "pm" + (hour - 12)
} else {
    hour = "pm12"
}

$("#currentDay").text(todaysDate.format('MMMM Do YYYY, h:mm:ss a'));

//work is the variable the times are objects properties that have been assigned arrays
var work = {
    "am8": "", "am9": "", "am10": "", "am11": "", "pm12": "", "pm1": "", "pm2": "", "pm3": "", "pm4": "", "pm5": "",
};

//Gets the work from the Calendar when opened
if (getWork) {
    work = JSON.parse(getWork);
}

var textareas = document.querySelectorAll("textarea");
var classname = "past";
for (let i = 0; i < textareas.length; i++) {
    let textarea = textareas[i];
    let id = textarea.id;
    if (id === hour) {
        classname = "present";
    } else if (classname === "present") {
        classname = "future";
    }

    //pulls the data down to the id in the text area
    textarea.value = work[id];
    textarea.classList.add(classname)
}

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
    let hour = textarea.id;

    work[hour] = text;
    //local storage of the user 

    localStorage.setItem("work", JSON.stringify(work));



};






