$(function() {

var d = new Date();
var $dt = $('.date');
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April",
 "May", "June", "July", "August", "September", "October", "November", "December"];

   $dt[0].innerText = days[d.getDay()]+ ", " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

 });
