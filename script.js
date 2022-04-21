$(document).ready(function () {
    //Set-up today's time and date format

    let timeNow = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").html(timeNow);
    let currentTime = moment().hour();

    //Saving in local storage 

    $(".saveBtn").click(function (event) {
      event.preventDefault();
      let value = $(this).siblings(".time-block").val();
      let time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
    });
  
    //Function for checking past, present and future times and dates
    function () {
        $(".time-div").each(function () {
            let timeBlock = parseInt($(this).attr("id").split("hour")[1]);
      
      if (currentTime == timeBlock ) {
        $(this).addClass("present");
        $(this).children(".description")
      } else if (currentTime < timeBlock  {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else (currentTime > timeBlock) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    }
    });
  
    //Get item from local storage

    $("#hour-09 .time-block").val(localStorage.getItem("08"));
    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16"));
    $("#hour-17 .time-block").val(localStorage.getItem("17"));
  });