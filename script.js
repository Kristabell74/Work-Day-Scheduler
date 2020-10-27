
//date and time
var todaysDate = moment();
$("#currentDay").text(todaysDate.format('MMMM Do YYYY, h:mm:ss a'));

//work is the variable the times are objects and each object holds and array that needs to be filled
var work = {
    "8:00 am": [], "9:00 am": [], "10:00 am": [], "11:00 am": [], "12:00 pm": [], "01:00 pm": [], "02:00 pm": [], "03:00 pm": [], "04:00 pm": [], "05:00 pm": []
};

//add work to local storage
var setWork = function () {

    localStorage.setItem("setWork", JSON.stringify(work));
}


// this adds the value of the textarea to the w,ork variable
var saveBtn = getElementById("saveBtn");
localStorage.setItem("work", input.value());

//This tells the computer to save the work when the save button is clicked
document.getElementById("input").addEventListener("click", function () {

    //save the current hour and the text area together
    var user = document.getElementById(".current hour", ".input-area", Json.stringify(work)).value;
    console.log(currentTime)
    //local storage of the user 
    localStorage.setItem("user", user);

}, false);









// //when click the save button


//     //this is keeping information with the time at the click of the button if it has changed
//     var time = $(this).closest("work").attribute("id");
//     if (parseInt(time) >= moment().hour()) {
//         //this is the click feature for the button 
//  

//         //click the button to save any input

// //save button click it in order to save information



//     //keep track of time 
//     //when time is past change the hour on calendar that is on the hour and in the future

//     //get the current work and the future work and calendar all 





