// JavaScript
/** code by webdevtrick ( https://webdevtrick.com ) **/
var threatingDaysIdx = [
      1,4,5
];

var interval = 15;
var month = [
 "January",
 "February",
 "March",
 "April",
 "May",
 "June",
 "July",
 "August",
 "September",
 "October",
 "November",
 "December"
];
var weekday = [
 "Sunday",
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
 "Saturday"
];
var weekdayShort = [
 "sun",
 "mon",
 "tue",
 "wed",
 "thu",
 "fri",
 "sat"
];
var monthDirection = 0;

// var test=document.createElement('section');
// test.setAttribute('id','test');

// var ul=document.createElement('ul');


// document.body.appendChild(test);
// test.appendChild(ul);

// for (var i=0; i<array.length; i++){

//     var li=document.createElement('li');

//     ul.appendChild(li);
//     li.innerHTML=li.innerHTML + array[i];

// }
 
$(document).on('click', '#chooseDays', function () {    
      var i =0;
      $("td.selectable").each(function (t) {
            i++;
            var ul = document.getElementById("napok");

//for (var i = 0; i < names.length; i++) {
//    var name = names[i];
    var li = document.createElement('li');
    //var h = monthArr[0].date.month;
    li.appendChild(document.createTextNode(/*name*/' '+ i+'.nap'));
//     + t.html+' '
    ul.appendChild(li);
//}
      })
      getNextMonth();
      $("td.selectable").each(function () {
            i++;
            var ul = document.getElementById("napok");

//for (var i = 0; i < names.length; i++) {
//    var name = names[i];
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(/*namemonthArr[0].date.month+*/' '+i+'.nap'));
    ul.appendChild(li);
      })
      getPrevMonth();
      ;
      //from today.getTime() while day before today + interval -> get days by threatingDaysIdx)
  });

function getNextMonth() {
 monthDirection++;
 var current;
 var now = new Date();
 if (now.getMonth() == 11) {
 current = new Date(now.getFullYear() + monthDirection, 0, 1);
 } else {
 current = new Date(now.getFullYear(), now.getMonth() + monthDirection, 1);
 }
 initCalender(getMonth(current));
}
 
function getPrevMonth() {
 monthDirection--;
 var current;
 var now = new Date();
 if (now.getMonth() == 11) {
 current = new Date(now.getFullYear() + monthDirection, 0, 1);
 } else {
 current = new Date(now.getFullYear(), now.getMonth() + monthDirection, 1);
 }
 initCalender(getMonth(current));
}
Date.prototype.isSameDateAs = function (pDate) {
 return (
 this.getFullYear() === pDate.getFullYear() &&
 this.getMonth() === pDate.getMonth() &&
 this.getDate() === pDate.getDate()
 );
};
 
function getMonth(currentDay) {
 var now = new Date();
 var currentMonth = month[currentDay.getMonth()];
 var monthArr = [];
 for (i = 1 - currentDay.getDate(); i < 31; i++) {
 var tomorrow = new Date(currentDay);
 tomorrow.setDate(currentDay.getDate() + i);
 if (currentMonth !== month[tomorrow.getMonth()]) {
 break;
 } else {
 monthArr.push({
 date: {
 weekday: weekday[tomorrow.getDay()],
 weekday_short: weekdayShort[tomorrow.getDay()],
 day: tomorrow.getDate(),
 dayIdx: tomorrow.getDay(),
 month: month[tomorrow.getMonth()],
 year: tomorrow.getFullYear(),
 current_day: now.isSameDateAs(tomorrow) ? true : false,
 date_info: tomorrow
 }
 });
 }
 }
 return monthArr;
}
 
function clearCalender() {
 $("table tbody tr").each(function () {
 $(this).find("td").removeClass("active selectable currentDay between hover").html("");
 });
 $("td").each(function () {
 $(this).unbind('mouseenter').unbind('mouseleave');
 });
 $("td").each(function () {
 $(this).unbind('click');
 });
 clickCounter = 0;
}

function testClick(){
      $("#selectedDay").add
}

Date.prototype.addDays = function(days) {
       var date = new Date(this.valueOf());
       date.setDate(date.getDate() + days);
       return date;
   }

function initCalender(monthData) {
 var row = 0;
 var classToAdd = "";
 var currentDay = "";
 var today = new Date();
 
 clearCalender();
 $.each(monthData,
 function (i, value) {
 var weekday = value.date.weekday_short;
 var day = value.date.day;
 var column = 0;
 var index = i + 1;
 
 $(".sideb .header .month").html(value.date.month);
 $(".sideb .header .year").html(value.date.year);
 
 var endDate = (new Date()).addDays(interval);

 if (today.getTime() < value.date.date_info.getTime()
&& value.date.date_info.getTime() < endDate.getTime() )
 {       
       if(threatingDaysIdx.includes(value.date.dayIdx))
       {
       classToAdd = "selectable";     
       }
       else classToAdd = "";
 }
else if (value.date.current_day) {
       if(threatingDaysIdx.includes(value.date.dayIdx))
       {
       classToAdd = "selectable";     
       }
       currentDay = "currentDay";
       $(".right-wrapper .header span").html(value.date.weekday);
       $(".right-wrapper .day").html(value.date.day);
       $(".right-wrapper .month").html(value.date.month);
       }
else {classToAdd = "";}

 $("tr.weedays th").each(function () {
 var row = $(this);
 if (row.data("weekday") === weekday) {
 column = row.data("column");
 return;
 }
 });
 $($($($("tr.days").get(row)).find("td").get(column)).addClass(classToAdd + " " + currentDay).html(day));
 currentDay = "";
 if (column == 6) {
 row++;
 }
 });
 $("td.selectable").click(function () {
 dateClickHandler($(this));
 });
}
initCalender(getMonth(new Date()));
 
var clickCounter = 0;
$(".fa-angle-double-right").click(function () {
 $(".right-wrapper").toggleClass("is-active");
 $(this).toggleClass("is-active");
});
 
function dateClickHandler(elem) {
 
 var day1 = parseInt($(elem).html());
 if (clickCounter === 0) {
 $("td.selectable").each(function () {
 $(this).removeClass("active between hover");
 });
 }
 clickCounter++;
 if (clickCounter === 2) {
 $("td.selectable").each(function () {
 $(this).unbind('mouseenter').unbind('mouseleave');
 });
 clickCounter = 0;
 return;
 }
 $(elem).toggleClass("active");
 $("td.selectable").hover(function () {
 
 var day2 = parseInt($(this).html());
 $(this).addClass("hover");
 $("td.selectable").each(function () {
 $(this).removeClass("between");
 
 });
 if (day1 > day2 + 1) {
 $("td.selectable").each(function () {
 var dayBetween = parseInt($(this).html());
 if (dayBetween > day2 && dayBetween < day1) {
 $(this).addClass("between");
 }
 });
 } else if (day1 < day2 + 1) {
 $("td.selectable").each(function () {
 var dayBetween = parseInt($(this).html());
 if (dayBetween > day1 && dayBetween < day2) {
 $(this).addClass("between");
 }
 });
 }
 }, function () {
 $(this).removeClass("hover");
 });
}
$(".fa-angle-left").click(function () {
 getPrevMonth();
 $(".main").addClass("is-rotated-left");
 setTimeout(function () {
 $(".main").removeClass("is-rotated-left");
 }, 195);
});
 
$(".fa-angle-right").click(function () {
 getNextMonth();
 $(".main").addClass("is-rotated-right");
 setTimeout(function () {
 $(".main").removeClass("is-rotated-right");
 }, 195);
});