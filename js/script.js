$(document).ready(function () {
  $("#clickable1").click(function () {
    $(".hide-1").slideToggle(1200);
    $(".show-1").slideToggle(1200);
  });
  
  $("#clickable2").click(function () {
    $(".hide-2").slideToggle(1200);
    $(".show-2").slideToggle(1200);
  });
  
  $("#clickable3").click(function () {
    $(".hide-3").slideToggle(1200);
    $(".show-3").slideToggle(1200);
  });
 

 

  $(".card").hover(function () {
    $(this).children(".card-1").fadeToggle('fast', "linear");
    });
  });




 function validate(){

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var text = document.getElementById("mess").value;
   if(name == ""){
     alert("Insert name!");
   }else if(email == ""){
     alert("Insert email!");
   }else if(text ==""){
     alert("There is no message!")
   }else{
     alert("we have recieved you message dear " + name + ", " + " we will get back to you");
   }
 }