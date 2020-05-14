 document.addEventListener("DOMContentLoaded",function()
{
  let S1 = "Tim Berners-Lee";
  let S2 = '2008';
  let S3 = '1994';
  //Pour chaque question...
 $(".question").each(function() {
   // Ajouter le bouton vrai
$("<button>")
     .addClass("btn btn-danger")
     .text("Jack Sparrow")
     .css("margin-right", "15px")
     .appendTo(this);

      $("<button>")
     .addClass("btn btn-danger")
     .text("Rasmus Lerdorf")
     .css("margin-right", "15px")
     .appendTo(this);

   $("<button>")
     .addClass("btn btn-success")
     .text("Tim")
     .css("margin-right", "15px")
     .appendTo(this);
   // Ajouter le bouton faux
   
     $("<button>")
     .addClass("btn btn-danger")
     .text("Dennis Ritchie")
     .css("margin-right", "15px")
     .appendTo(this);
 });

 
 //Lorsqu'on clique sur un bouton dans une question
 $(".question button").click(function() {
   //Contrôler s'il y a correspondance entre le bouton cliquer (vrai/faux) et le type de question (question-true/question-false)
   if(($(this).text() == "Tim" & $(this).parent().hasClass("question-true")) /*|| ($(this).text() == "Faux" & $(this).parent().hasClass("question-false"))*/) {
     $('<h1>').addClass('text-success').text(' Reponse Correct !').appendTo($(this).parent()); 
   } else {
     $('<h1>').addClass('text-danger').text('Reponse Incorrect !').appendTo($(this).parent());
   }
   //désactiver l'autre bouton de la question
   $(this).siblings("button").attr("disabled", "disabled"); 
 });




  $(".question1").each(function() {
     $("<button>")
     .addClass("btn btn-danger")
     .text("2009")
     .css("margin-right", "15px")
     .appendTo(this);
   // Ajouter le bouton vrai
   $("<button>")
     .addClass("btn btn-success")
     .text("2008")
     .css("margin-right", "15px")
     .appendTo(this);
   // Ajouter le bouton faux
    $("<button>")
     .addClass("btn btn-danger")
     .text("2000")
     .css("margin-right", "15px")
     .appendTo(this);

      $("<button>")
     .addClass("btn btn-danger")
     .text("1991")
     .css("margin-right", "15px")
     .appendTo(this);
  


      //Lorsqu'on clique sur un bouton dans une question
 $(".question1 button").click(function() {
   //Contrôler s'il y a correspondance entre le bouton cliquer (vrai/faux) et le type de question (question-true/question-false)
   if(($(this).text() == "2008" & $(this).parent().hasClass("question-false1")) || ($(this).text() == "Faux" & $(this).parent().hasClass("question-false1"))) {
     $('<h1>').addClass('text-succes').text(' Reponse Correct !').appendTo($(this).parent()); 
   } else {
     $('<h1>').addClass('text-dange').text('Reponse Incorrect !').appendTo($(this).parent());
   }
   //désactiver l'autre bouton de la question
   $(this).siblings("button").attr("disabled", "disabled"); 
 });
 });


})
