//define func"tions here
function getIt(){
  $("p").on("click", function(){
    alert("Hey!")
  });
}

function frameIt(){
  $("img").on("load", function(){
    $("img").addClass("tasty");
  });
}
function pressIt(){
  $("input").on("keydown", function(key){
    
    if(key.which === 71){
    alert("G was pushed")}
  });
}
function submitIt(){
  $("button").on("submit", function(){
    alert("Your form is going to be submitted now.")
  });
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
