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
  $("input").on("keydown", function(){
    
    if(keydown.which === 71){
    alert("G was pushed")}
  })
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
});
